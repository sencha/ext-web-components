import './HandlesDragDropComponent.scss';
import './HandlesDragDropComponent.html';

export default class HandlesDragDropComponent {
  constructor () {}

  parentReady = (ele) => {
    this.parentRef = ele.detail.cmp.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
  }

  handleRepeatReady = (ele) => {
    this.handleRepeatRef = ele.detail.cmp.el;
    this.sources[0].setElement(this.handleRepeatRef);
 }

  dragReady = (ele) => {
    this.dragRef = ele.detail.cmp.el;
    this.sources[1].setElement(this.dragRef);
  }

  sources = [
    new Ext.drag.Source({
        groups: 'repeat',
        handle: '.handle',
        listeners: {
          dragstart(source, info) {
            source.getProxy().setHtml(info.eventTarget.innerHTML);
          }
        },
        proxy: {
          type: 'placeholder',
          cls: 'handle-proxy'
        }
    }),

    new Ext.drag.Source({
      handle: '.handle',
    })
  ];
}
