import Ext_grid_menu_Columns from './Ext/grid/menu/Columns'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridcolumnsmenuComponent extends Ext_grid_menu_Columns {
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
//        window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenuComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenuComponent))
