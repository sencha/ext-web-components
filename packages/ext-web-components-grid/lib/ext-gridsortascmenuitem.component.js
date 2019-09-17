import Ext_grid_menu_SortAsc_Component from './Ext/grid/menu/SortAsc'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridsortascmenuitemComponent extends Ext_grid_menu_SortAsc_Component {
    constructor() {
        super ()
        this.xtype = 'gridsortascmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortascmenuitem', ExtGridsortascmenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortascmenuitemComponent))
