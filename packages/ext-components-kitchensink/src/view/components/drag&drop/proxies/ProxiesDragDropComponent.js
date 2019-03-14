import './ProxiesDragDropComponent.css';

export default class ProxiesDragDropComponent {

  constructor () {}

  noneText = 'No Proxy';

  doDestroy() {
    Ext.destroy(this.sources.forEach(Ext.destroy.bind(Ext)));
  }

  parentReady = (ele) => {
    this.parentRef = ele.detail.cmp.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
    this.sources[2].setConstrain(this.parentReady);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  noneEleReady = (ele) => {
    this.noneRef = ele.detail.cmp.el;
    this.sources[0].setElement(this.noneRef);
  }

  originalEleReady = (ele) => {
    this.originalRef = ele.detail.cmp.el;
    this.sources[1].setElement(this.originalRef);
  }

  placeholderEleReady = (ele) => {
    this.placeholderRef = ele.detail.cmp.el;
    this.sources[2].setElement(this.placeholderRef);
  }
  
  sources = [
    // No proxy, just track the mouse cursor
    new Ext.drag.Source({
      proxy: 'none',
      listeners: {
        dragmove: (source, info) => {
          console.log("dragmove")
          const pos = info.proxy.current;
          this.noneText = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
          this.noneRef.setHtml(this.noneText);
        },
        dragend: () => {
          this.noneRef.setHtml('No Proxy');
        }
      }
    }),

    // Use the drag element as the proxy. Animate it back into position on drop.
    new Ext.drag.Source({
      revert: true,
      proxy: 'original'
    }),

      // Leave the drag element in place and create a custom placeholder.
    new Ext.drag.Source({
      proxy: {
          type: 'placeholder',
          cls: 'proxy-drag-custom',
          html: 'Custom'
      }
    })
  ];

}
