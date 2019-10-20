import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridcolumnsmenu extends Ext_grid_menu_Columns {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridcolumnsmenu'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenu);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenu))
//export default reactify(ExtGridcolumnsmenu);