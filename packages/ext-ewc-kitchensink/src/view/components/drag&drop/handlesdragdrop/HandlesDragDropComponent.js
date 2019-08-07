import './HandlesDragDropComponent.scss';
import './HandlesDragDropComponent.html';

export default class HandlesDragDropComponent {
    constructor() {}

    parentReady = (ele) => {
        this.parentRefCmp = ele.detail.cmp.el;
        this.sources[0].setConstrain(this.parentRefCmp);
        this.sources[1].setConstrain(this.parentRefCmp);
    }

    handleRepeatReady = (ele) => {
        this.handleRepeatRefCmp = ele.detail.cmp.el;
        this.sources[0].setElement(this.handleRepeatRefCmp);
    }

    dragReady = (ele) => {
        this.dragRefCmp = ele.detail.cmp.el;
        this.sources[1].setElement(this.dragRefCmp);
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
