import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridsortascmenuitem extends Ext_grid_menu_SortAsc {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridsortascmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortascmenuitem', ExtGridsortascmenuitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortascmenuitem))
//export default reactify(ExtGridsortascmenuitem);