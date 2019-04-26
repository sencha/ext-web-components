import './SunburstComponent.html';

Ext.require([
  'Ext.util.Format',
  'Ext.plugin.Responsive'
]);

export default class SunburstComponent {

  constructor() {
    this.store = Ext.create('Ext.data.TreeStore', {
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
    });
  }

  onSelectionChange({ detail }) {
    if (Ext.isArray(detail.selected)) {
      this.selection = detail.selected[0];
      this.sunburst.setSelection(this.selection);
    }
  }

  onTooltip(component, tooltip, node) {
    try {
      const record = node.data,
          size = record.get('size'),
          length = record.childNodes.length;

      tooltip.setTitle(record.get('text'));
      tooltip.setHtml(size ? 
          Ext.util.Format.fileSize(size) :
          length + ' file' + (length === 1 ? '' : 's') + ' inside.'
      );
    }
    catch (e) {
      console.error(e)
    }
  }
  
  onTreeReady(event) {
    const treeList = event.detail.cmp;

    if (Ext.os.is.Phone) {
      treeList.setWidth(undefined);
      treeList.setHeight(200);
    } else {
      treeList.setWidth(230);
      treeList.setHeight(undefined);
    }

    treeList.setStore(this.store);
    treeList.on('tap', this.onSelectionChange.bind(this));
    treeList.setSelection(this.selection);
  }

  onPanelReady(event) {
    let cmp = event.detail.cmp;
    cmp.setResponsiveConfig(
      {
        'width > 600': { layout: 'hbox' }
      }
    )
  }

  ond3Ready(event) {
    this.sunburst = event.detail.cmp;
    this.sunburst.setStore(this.store);
    this.sunburst.setTooltip({
      renderer:this.onTooltip.bind(this),
    });
    this.sunburst.setSelection(this.selection);
  }

}
