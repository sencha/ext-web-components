import './SimpleDragDropComponent.html';

export default class SimpleDragDropComponent {
    constructor() {}

    onDragMove = (source, info) => {
        const pos = info.element.current;
        const html = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
        this.itemCmp.setHtml(html);
    }

    onDragEnd = () => {
        this.itemCmp.setHtml('Drag Me!');
    }

    doDestroy = () => {
        Ext.destroy(this.source);
    }

    onParentReady = (ele) => {
        this.parentCmp = ele.detail.cmp.el;
    }

    onItemReady = (ele) => {
        this.itemCmp = ele.detail.cmp.el;
        this.source = new Ext.drag.Source({
            element: this.itemCmp,
            constrain: this.parentCmp,
            listeners: {
                dragMove: this.onDragMove.bind(this),
                dragEnd: this.onDragEnd.bind(this),
            }
        });
    }
}
