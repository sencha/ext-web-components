//import Ext_grid_DateColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/DateColumn.js';
import Ext_grid_DateColumn from './Ext/grid/DateColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCDatecolumn extends Ext_grid_DateColumn {
    constructor() {
        super ([], []);
        this.xtype = 'datecolumn';
    }

}
window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));

