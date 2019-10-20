import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDragcolumn extends Ext_grid_column_Drag {
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
//        window.customElements.define('ext-dragcolumn', ExtDragcolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(ExtDragcolumn))
//export default reactify(ExtDragcolumn);