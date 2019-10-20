import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridshowingroupsmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitem))
//export default reactify(ExtGridshowingroupsmenuitem);