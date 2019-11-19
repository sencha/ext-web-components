import './SimpleDragDropComponent.html';
import { extnameToProperty } from '@sencha/ext-web-components/src/util.js';

export default class SimpleDragDropComponent {

    onReadyParent = ({detail: {cmpObj}}) => {
        extnameToProperty(cmpObj, this);
        this.source = new Ext.drag.Source({
            element: this.itemCmp.el,
            constrain: this.parentCmp.el,
            listeners: {
                dragstart: this.onDragStart,
                dragmove: this.onDragMove,
                dragend: this.onDragEnd,
            }
        });
    }

    onDragStart = () => {
        //console.log('start');
    }

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

}
