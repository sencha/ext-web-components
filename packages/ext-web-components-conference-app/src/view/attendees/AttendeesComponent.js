import './WorldMapComp.js';
import './AttendeesComponent.html';

export default class AttendeesComponent {
    constructor() {}

    panelReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: [{ name: 'cnt', type: 'number'}, 'Work_Country'],
            proxy: {
                type: 'ajax',
                url: 'resources/countries.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        });
        const colorAxis={
            scale: {
                type: 'log',
                range: ['#99ccff', '#0050a1']
            },
            field: 'cnt'
        };
        const mapAxis={
            field: 'Work_Country',
            hidden: !Ext.platformTags.phone
        };
        const interactions=Ext.platformTags.phone ? {
            type: 'panzoom',
            zoom: {
                extent: [0.3, 3],
                doubleTap: false
            },
            pan: {
                constrain: false
            }
        } : null;
        const legend={
            docked: 'right',
            items: {
                count: 5,
                slice: [1],
                reverse: true,
                size: {
                    x: 40,
                    y: 20
                }
            }
        };

        const worldMap = new ConferenceApp.WorldMap(); // eslint-disable-line no-undef
        worldMap.setStore(store);
        worldMap.setColorAxis(colorAxis);
        worldMap.setMapAxis(mapAxis);
        worldMap.setInteractions(interactions);
        const targetPanel = event.detail.cmp;
        const targetPanelDom = targetPanel.el.dom;
        worldMap.setRenderTo(targetPanelDom);
        worldMap.setLegend(legend);
    }
}
