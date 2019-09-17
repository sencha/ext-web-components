import Ext_grid_menu_SortDesc_Component from './Ext/grid/menu/SortDesc'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridsortdescmenuitemComponent extends Ext_grid_menu_SortDesc_Component {
    constructor() {
        super ()
        this.xtype = 'gridsortdescmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortdescmenuitem', ExtGridsortdescmenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortdescmenuitemComponent))
