import './SimpleDragDropComponent.html';

export default class SimpleDragDropComponent {
    extnameToProperty = (cmpObj, me, suffix) => {
        if (suffix == undefined) {
            suffix = 'Cmp';
        }
        for (var prop in cmpObj) {
            me[prop+suffix] = cmpObj[prop];
        }
    }

    onReadyParent = ({ detail: { cmpObj } }) => {
        this.extnameToProperty(cmpObj, this);
        this.source = new Ext.drag.Source({
            element: this.itemCmp.el,
            constrain: this.parentCmp.el,
            listeners: {
                dragstart: this.onDragStart,
                dragmove: this.onDragMove,
                dragend: this.onDragEnd
            }
        });
    };

    onDragStart = () => {
        //console.log('start');
    };

    onDragMove = (source, info) => {
        const pos = info.element.current;
        const html = Ext.String.format(
            "X: {0}, Y: {1}",
            Math.round(pos.x),
            Math.round(pos.y)
        );
        this.itemCmp.setHtml(html);
    };

    onDragEnd = () => {
        this.itemCmp.setHtml("Drag Me!");
    };

    doDestroy = () => {
        Ext.destroy(this.source);
    };
}
