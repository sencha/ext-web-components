import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridsortdescmenuitem extends Ext_grid_menu_SortDesc {
    constructor() {
        super ([],[])
        this.xtype = 'gridsortdescmenuitem';
    }
}
window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortdescmenuitem))
