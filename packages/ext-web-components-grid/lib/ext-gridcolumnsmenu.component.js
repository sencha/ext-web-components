import Ext_grid_menu_Columns_Component from './Ext/grid/menu/Columns'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridcolumnsmenuComponent extends Ext_grid_menu_Columns_Component {
    constructor() {
        super ()
        this.xtype = 'gridcolumnsmenu'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenuComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenuComponent))
