import './TreeMapToolTipComponent.html';
import './TreeMapToolTipComponent.scss';

export default class TreeMapToolTipComponent {
    d3Ready = (event) => {
        const cmp = event.detail.cmp;
        const store = Ext.create('Ext.data.TreeStore', {
            autoLoad: true,
            fields: [
                'name',
                'description',
                'cap',
                {
                    name: 'leaf',
                    calculate: function(data) {
                        return data.root ? false : !data.children;
                    }
                },
                {
                    name: 'change',
                    type: 'number',
                    calculate: function() {
                        return (-5 + Math.random() * 10).toFixed(2); // percentages
                    }
                },
                {
                    name: 'expanded',
                    type: 'boolean',
                    defaultValue: true
                }
            ],
            proxy: {
                type: 'ajax',
                url: 'resources/data/tree/stocks.json'
            }
        });

        const colorAxis = Ext.create('Ext.d3.axis.Color', {
            scale: {
                type: 'linear',
                domain: [-5, 0, 5],
                range: ['#E45649', '#ECECEC', '#50A14F']
            },
            field: 'change',
            processor: (axis, scale, node, field) => {
                var record = node.data;
                return record.isLeaf() ? scale(record.get(field)) : '#ececec';
            }
        });

        cmp.setStore(store);
        cmp.setNodeValue(this.nodeValue.bind(this));
        cmp.setTooltip({
            cls: 'treemaptooltip-tip',
            ui: 'd3-treemap',
            trackMouse: true,
            renderer: this.tooltipRenderer.bind(this),
        });
        cmp.setColorAxis(colorAxis);
    }

    nodeValue = (node) => {
        return node.data.cap;
    }

    tooltipRenderer = (component, tooltip, node) => {
        const parentTpl = new Ext.XTemplate([
                '<div class="treemaptooltip-tip-title">{data.name}</div>',
                '<tpl for="childNodes">',
                '<div><span class="treemaptooltip-tip-symbol">{data.name}</span><tpl if="data.description"> - {data.description}</tpl></div>',
                '<tpl if="xindex &gt; 10">...{% break; %}</tpl>',
                '</tpl>'
            ]),
            leafTpl = new Ext.XTemplate([
                '<div class="treemaptooltip-tip-company">{data.description}</div>',
                '<div>Change: <tpl if="data.change &gt; 0">+</tpl>{data.change}%</div>'
            ]);
        const record = node.data,
            tpl = record.isLeaf() ? leafTpl : parentTpl;

        component.setSelection(record);
        tooltip.setHtml(tpl.apply(record));
    }
}
