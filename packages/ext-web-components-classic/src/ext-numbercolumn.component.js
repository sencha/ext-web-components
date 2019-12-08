//import Ext_grid_NumberColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/NumberColumn.js';
import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCNumbercolumn extends Ext_grid_NumberColumn {
    constructor() {
        super ([], []);
        this.xtype = 'numbercolumn';
    }

}
window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));

