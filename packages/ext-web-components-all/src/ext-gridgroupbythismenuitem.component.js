import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
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
//        window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(ExtGridgroupbythismenuitem))
//export default reactify(ExtGridgroupbythismenuitem);