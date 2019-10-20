import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridsortdescmenuitem extends Ext_grid_menu_SortDesc {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridsortdescmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortdescmenuitem', ExtGridsortdescmenuitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortdescmenuitem))
//export default reactify(ExtGridsortdescmenuitem);