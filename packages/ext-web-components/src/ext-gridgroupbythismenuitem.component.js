import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridgroupbythismenuitemComponent extends Ext_grid_menu_GroupByThis {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridgroupbythismenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(ExtGridgroupbythismenuitemComponent))
