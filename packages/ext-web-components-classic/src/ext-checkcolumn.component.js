//import Ext_grid_column_CheckColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/column/CheckColumn.js';
import Ext_grid_column_CheckColumn from './Ext/grid/column/CheckColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckcolumn extends Ext_grid_column_CheckColumn {
    constructor() {
        super ([], []);
        this.xtype = 'checkcolumn';
    }

}
window.customElements.define('ext-checkcolumn', ElementParser.withParsedCallback(EWCCheckcolumn));

