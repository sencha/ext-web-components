//import Ext_grid_menu_Columns from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/Columns.js';
import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridcolumnsmenu extends Ext_grid_menu_Columns {
    constructor() {
        super ([], []);
        this.xtype = 'gridcolumnsmenu';
    }

}
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(EWCGridcolumnsmenu));

