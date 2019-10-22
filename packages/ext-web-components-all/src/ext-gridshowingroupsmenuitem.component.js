import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
    constructor() {
        super ([],[])
        this.xtype = 'gridshowingroupsmenuitem';
    }
}
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitem))
