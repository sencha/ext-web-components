//import Ext_grid_column_Date from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Date.js';
import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatecolumn extends Ext_grid_column_Date {
    constructor() {
        super ([], []);
        this.xtype = 'datecolumn';
    }

}
window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(EWCDatecolumn));

