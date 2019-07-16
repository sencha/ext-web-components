import './DragFormToGridComponent.html';
import './FormToGrid.scss';

Ext.require([
    'Ext.plugin.dd.DragZone',
    'Ext.plugin.dd.DropZone'
]);

export default class DragFormToGridComponent {
	constructor(){}

    dataPanelReady(event) {
        this.dataPanelCmp = event.detail.cmp;
    }

    parentPanelReady(event) {
        this.parentPanelCmp = event.detail.cmp;
    }

	patientDataViewReady(event) {
		this.patientDataViewCmp = event.detail.cmp;

		this.patientDataViewCmp.setStore({
			fields: ['name', 'address', 'telephone'],
            data: [{
                insuranceCode: '11111',
                name: 'Fred Bloggs',
                address: 'Main Street',
                telephone: '555 1234 123'
            }, {
                insuranceCode: '22222',
                name: 'Fred Bansod',
                address: 'Van Ness',
                telephone: '666 666 666'
            }, {
                insuranceCode: '33333',
                name: 'Fred Mercury',
                address: 'Over The Rainbow',
                telephone: '555 321 0987'
            }, {
                insuranceCode: '44444',
                name: 'Fred Forsyth',
                address: 'Blimp Street',
                telephone: '555 111 2222'
            }, {
                insuranceCode: '55555',
                name: 'Fred Douglass',
                address: 'Talbot County, Maryland',
                telephone: 'N/A'
            }]
		});
		this.patientDataViewCmp.setItemTpl(`
			<tpl for=".">
				<div class="patient-source">
					<table>
						<tbody>
							<tr><td class="patient-label">Name</td><td class="patient-name">{name}</td></tr>
							<tr><td class="patient-label">Address</td><td class="patient-name">{address}</td></tr>
							<tr><td class="patient-label">Telephone</td><td class="patient-name">{telephone}</td></tr>
						</tbody>
					</table>
				</div>
			</tpl>
		`);
	}

	hospitalGridReady(event) {
		this.hospitalGridCmp = event.detail.cmp;
		this.hospitalGridCmp.setItemConfig({
			body: {
                tpl:`
					<tpl if="patients">
			            <tpl for="patients">
				            <div class="name-tag x-tooltiptool">
					            <span>{[values]}</span>
					            <span index="{[xindex - 1]}" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span>
				            </div>
			            </tpl>
			            <tpl else>
			            	<div class="empty-txt">Drop patients here</div>
		            </tpl>
				`,
				cls: 'hospital-target'
			}
		});

		this.hospitalGridCmp.setStore({
            fields: ['name', 'address', 'telephone', 'patients'],
            data: [{
                code: 'AAAAA',
                name: 'Saint Thomas',
                address: 'Westminster Bridge Road, SE1 7EH',
                telephone: '020 7188 7188'
            }, {
                code: 'BBBBB',
                name: 'Queen\'s Medical Centre',
                address: 'Derby Road, NG7 2UH',
                telephone: '0115 924 9924'
            }, {
                code: 'CCCCC',
                name: 'Saint Bartholomew',
                address: 'West Smithfield, EC1A 7BE',
                telephone: '020 7377 7000'
            }, {
                code: 'DDDDD',
                name: 'Royal London',
                address: 'Whitechapel, E1 1BB',
                telephone: '020 7377 7000'
            }]
        });

        this.registerDragZone();
        this.registerDropZone();

        this.hospitalGridCmp.setListeners({
            element: 'element',
            delegate: ['.remove-icon'],
            tap: this.onRemoveTapped
        });
    }
    
    registerDragZone = () => {
        let me = this.dataPanelCmp;
        let patientView = this.patientDataViewCmp;
        let touchEvents = Ext.supports.Touch && Ext.supports.TouchEvents;

        me.dragZone = Ext.create('Ext.plugin.dd.DragZone', {
            element: patientView.bodyElement,
            handle: '.patient-source',
            view: patientView,  
            $configStrict: false,
            activateOnLongPress: touchEvents ? true : false,
            proxy: {
                cls: 'x-proxy-drag-el patient-proxy-el'
            },

            getDragText: function(info) {
                var selector = '.x-dataview-item',
                    el = Ext.fly(info.eventTarget).up(selector);

                return el.dom.innerHTML;
            },

            getDragData: function(e) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        });
    };

    registerDropZone = () => {
        let mainContext = this;
        let me = this.parentPanelCmp
        let hospitalView = this.hospitalGridCmp;

        me.dropZone = Ext.create('Ext.plugin.dd.DropZone', {
            element: hospitalView.bodyElement,
            view: hospitalView,
            $configStrict: false,
            prepareNameString: me.prepareNameString,

            onDragMove: function(info) {
                let me = this;
                let ddManager = Ext.dd.Manager;
                let targetEl = ddManager.getTargetEl(info);
                let rowBody = Ext.fly(targetEl);
                let isRowBody = rowBody.hasCls('hospital-target');
                let hospital;
                let patients;
                let name;

                if (!isRowBody) {
                    rowBody = Ext.fly(targetEl).parent('.x-rowbody');

                    if (rowBody) {
                        isRowBody = rowBody.hasCls('hospital-target');
                    }
                }

                me.toggleDropMarker(info, false);

                if (!isRowBody) {
                    return;
                }

                hospital = rowBody.component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                me.ddEl = rowBody;
                me.toggleDropMarker(info, true);
            },

            onDrop: function(info) {
                let me = this;
                let hospital;
                let patients;
                let name;
                let component;

                if (!me.ddEl) {
                    return;
                }

                component = me.ddEl.component;
                hospital = component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                if (!patients) {
                    patients = [];
                    hospital.set('patients', patients);
                }

                patients.push(name);
                component.contentElement.update(mainContext.prepareNameString(patients));
                me.toggleDropMarker(info, false);
            },

            toggleDropMarker: function(info, state) {
                let me = this;
                let ddManager;

                if (!me.ddEl) {
                    return;
                }

                ddManager = Ext.dd.Manager;
                ddManager.toggleTargetNodeCls(me.ddEl, 'hospital-target-hover', state);
                ddManager.toggleProxyCls(info, me.validDropCls, state);

                if (!state) {
                    me.ddEl = null;
                }
            }
        });
    };

    prepareNameString = (values) => {
        let str = '';
        let i = 0;
        let ln = values.length;

        for (; i < ln; i++) {
            str += [
                '<div class="name-tag x-tooltiptool">',
                '<span>', values[i], '</span>',
                '<span index="', i,
                '" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span></div>'
            ].join('');
        }

        return (str || 'Drop patients here');
    };

    onRemoveTapped = (e, target) => {
        let mainContext = this;
        let me = this;
        let patientIndex = +target.getAttribute('index');
        let rowBody = Ext.Component.from(target);
        let record = rowBody.getRecord();
        let patients = record.get('patients');

        if (patientIndex === -1) {
            return;
        }

        patients = Ext.Array.removeAt(patients, patientIndex, 0);
        rowBody.contentElement.update(mainContext.prepareNameString(patients));

        if (!patients.length) {
            record.set('patients', null);
        }
    };

    destroy = function() {
        let me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dragZone);
        me.callParent();
    };
}