import './GroupsDragDropComponent.scss';
import './GroupsDragDropComponent.html';

export default class GroupsDragDropComponent {

  constructor () {}

  doDestroy() {
    this.sources.forEach(Ext.destroy.bind(Ext));
  }

  parentReady(ele) {
    const comp = this;
    this.parentRef = ele.detail.cmp.el;
    this.sources.slice(0, 3).forEach(function(source, i){
      source.setConstrain(comp.parentRef);
    });
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  src1Ready(ele) {
    this.src1Ref = ele.detail.cmp.el;
    this.sources[0].setElement(this.src1Ref);
  }

  src2Ready(ele) {
    this.src2Ref = ele.detail.cmp.el;
    this.sources[1].setElement(this.src2Ref);
  }

  srcbReady(ele) {
    this.srcbRef = ele.detail.cmp.el;
    this.sources[2].setElement(this.srcbRef);
  }

  tar1Ready(ele) {
    this.tar1Ref = ele.detail.cmp.el;
    this.sources[3].setElement(this.tar1Ref);
  }

  tar2Ready(ele) {
    this.tar2Ref = ele.detail.cmp.el;
    this.sources[4].setElement(this.tar2Ref);
  }

  tarbReady(ele) {
    this.tarbRef = ele.detail.cmp.el;
    this.sources[5].setElement(this.tarbRef);
  }

  createSource(cfg) {
    return new Ext.drag.Source(
      Object.assign(cfg, {
        proxy: {
          type: 'placeholder',
          cls: 'group-proxy',
          invalidCls: 'group-proxy-invalid',
          validCls: 'group-proxy-valid',
          html: 'Drag'
        }
      })
    );
  }
  sources = [
    this.createSource({
        id: 'group1-source',
        groups: 'group1'
    }),
    this.createSource({
        id: 'group2-source',
        groups: 'group2'
    }),
    this.createSource({
        id: 'both-source',
        groups: ['group1', 'group2']
    }),
    
    new Ext.drag.Target({
        id: 'group1-target',
        groups: 'group1'
    }),
    new Ext.drag.Target({
        id: 'group2-target',
        groups: 'group2'
    }),
    new Ext.drag.Target({
        id: 'both-target',
        groups: ['group1', 'group2']
    })
  ];
}
