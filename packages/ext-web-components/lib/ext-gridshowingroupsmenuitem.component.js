import Ext_grid_menu_ShowInGroups_Component from './Ext/grid/menu/ShowInGroups'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridshowingroupsmenuitemComponent extends Ext_grid_menu_ShowInGroups_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'gridshowingroupsmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitemComponent))
