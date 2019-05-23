import './ProxiesDragDropComponent.scss';
import './ProxiesDragDropComponent.html';

export default class ProxiesDragDropComponent {
    constructor() {
        this.noneText = 'No Proxy';
    }

    doDestroy = () => {
        Ext.destroy(this.sources.forEach(Ext.destroy.bind(Ext)));
    }

    parentReady = (ele) => {
        this.parentRefCmp = ele.detail.cmp.el;
        this.sources[0].setConstrain(this.parentRefCmp);
        this.sources[1].setConstrain(this.parentRefCmp);
        this.sources[2].setConstrain(this.parentRefCmp);
        this.parentRefCmp.destroy = this.doDestroy.bind(this);
    }

    noneEleReady = (ele) => {
        this.noneRefCmp = ele.detail.cmp.el;
        this.sources[0].setElement(this.noneRefCmp);
    }

    originalEleReady = (ele) => {
        this.originalRefCmp = ele.detail.cmp.el;
        this.sources[1].setElement(this.originalRefCmp);
    }

    placeholderEleReady = (ele) => {
        this.placeholderRefCmp = ele.detail.cmp.el;
        this.sources[2].setElement(this.placeholderRefCmp);
    }

    dragMove = (source, info) => {
        const pos = info.proxy.current;
        this.noneText = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
        this.noneRefCmp.setHtml(this.noneText);
    }

    dragEnd = () => {
        this.noneRefCmp.setHtml('No Proxy');
    }

    sources = [
        new Ext.drag.Source({
            proxy: 'none',
            listeners: {
                dragmove:this.dragMove.bind(this),
                dragend:this.dragEnd.bind(this)
            }
        }),

        new Ext.drag.Source({
            revert: true,
            proxy: 'original'
        }),

        new Ext.drag.Source({
            proxy: {
                type: 'placeholder',
                cls: 'proxy-drag-custom',
                html: 'Custom'
            }
        })
    ];
}
