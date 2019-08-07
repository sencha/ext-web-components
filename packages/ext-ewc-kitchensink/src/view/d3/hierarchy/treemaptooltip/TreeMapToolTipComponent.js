import './TreeMapToolTipComponent.html';
import './TreeMapToolTipComponent.scss';

export default class TreeMapToolTipComponent {
    d3TreeMapReady = (event) => {
        this.d3TreeMap = event.detail.cmp;
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

        this.d3TreeMap.setStore(store);
        this.d3TreeMap.setNodeValue(this.nodeValue.bind(this));
        this.d3TreeMap.setTooltip({
            cls: 'treemaptooltip-tip',
            ui: 'd3-treemap',
            trackMouse: true,
            renderer: this.tooltipRenderer.bind(this),
        });
        this.d3TreeMap.setColorAxis(colorAxis);
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
