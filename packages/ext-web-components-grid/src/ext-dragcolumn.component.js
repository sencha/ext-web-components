import Ext_grid_column_Drag from './Ext/grid/column/Drag.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDragcolumnComponent extends Ext_grid_column_Drag {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'dragcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dragcolumn', ExtDragcolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(ExtDragcolumnComponent))
