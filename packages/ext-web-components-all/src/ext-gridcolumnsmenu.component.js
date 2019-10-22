import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridcolumnsmenu extends Ext_grid_menu_Columns {
    constructor() {
        super ([],[])
        this.xtype = 'gridcolumnsmenu';
    }
}
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenu))
