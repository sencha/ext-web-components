import './PackComponent.html';

export default class PackComponent {
  constructor() { }

  onTooltip = (component, tooltip, node) => {
    const record = node.data,
      size = record.get('size'),
      n = record.childNodes.length;
    let html = '<span style="font-weight: bold">' + record.get('text') + '</span><br>';

    if (size) {
      html += Ext.util.Format.fileSize(size);
    } else {
      html += n + ' file' + (n === 1 ? '' : 's') + ' inside.'
    }

    tooltip.setHtml(html);
  }

  d3onReady = (event) => {
    const store = Ext.create('Ext.data.TreeStore', {
      autoLoad: true,
      defaultRootText: 'd3',
      fields: [
        'name',
        'path',
        'size',
        {
          name: 'leaf',
          calculate: function (data) {
            return data.root ? false : !data.children;
          }
        },
        {
          name: 'text',
          calculate: function (data) {
            return data.name;
          }
        }
      ],
      proxy: {
        type: 'ajax',
        url: 'resources/data/tree/tree.json'
      },
      idProperty: 'path'
    })

    let d3Cmp = event.detail.cmp;
    d3Cmp.setStore(store);
    d3Cmp.setTooltip({ renderer: this.onTooltip.bind(this) });
  }
}
