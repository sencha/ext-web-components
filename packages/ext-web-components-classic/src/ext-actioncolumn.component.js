//import Ext_grid_ActionColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/ActionColumn.js';
import Ext_grid_ActionColumn from './Ext/grid/ActionColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCActioncolumn extends Ext_grid_ActionColumn {
    constructor() {
        super ([], []);
        this.xtype = 'actioncolumn';
    }

}
window.customElements.define('ext-actioncolumn', ElementParser.withParsedCallback(EWCActioncolumn));

