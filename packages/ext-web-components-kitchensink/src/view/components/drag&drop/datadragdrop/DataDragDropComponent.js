import './DataDragDropComponent.scss';
import './DataDragDropComponent.html';

export default class DataDragDropComponent {
  constructor () {
    this.source = new Ext.drag.Source({
      handle: '.handle',
      describe(info) {
          info.setData('postage-duration', info.eventTarget.getAttribute('data-days'));
      },
      listeners: {
          dragstart(source, info) {
              source.getProxy().setHtml(info.eventTarget.innerHTML);
          }
      },
      proxy: {
          type: 'placeholder',
          cls: 'data-proxy'
      }
    });

    this.target = new Ext.drag.Target({
      validCls: 'data-target-valid',
      listeners: {
          drop(target, info) {
              info.getData('postage-duration').then(function(duration) {
                  const s = Ext.String.format('Your parcel will arrive within {0} days', duration);
                  Ext.Msg.alert('Delivery set', s);
              })
          }
      }
    });
  }

  doDestroy() {
    Ext.destroy(this.source, this.target);
  }

  parentReady = (ele) => {
    this.parentRef = ele.detail.cmp.el;
    this.source.setConstrain(this.parentRef);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  targetReady = (ele) => {
    this.targetRef = ele.detail.cmp.el;
    this.target.setElement(this.targetRef);
  }

  sourceReady = (ele) => {
    this.sourceRef = ele.detail.cmp.el;
    this.source.setElement(this.sourceRef);
  }
}
