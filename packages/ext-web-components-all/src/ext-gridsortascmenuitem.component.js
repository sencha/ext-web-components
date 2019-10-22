import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridsortascmenuitem extends Ext_grid_menu_SortAsc {
    constructor() {
        super ([],[])
        this.xtype = 'gridsortascmenuitem';
    }
}
window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortascmenuitem))
