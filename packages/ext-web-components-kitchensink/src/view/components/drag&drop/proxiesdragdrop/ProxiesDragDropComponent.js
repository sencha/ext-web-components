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

    dragMove = (source, info) => {
        const pos = info.proxy.current;
        this.noneText = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
        this.noneRef.setHtml(this.noneText);
    }

    dragEnd = () => {
        this.noneRef.setHtml('No Proxy');
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
