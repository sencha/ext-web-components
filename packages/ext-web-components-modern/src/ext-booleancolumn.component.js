//import Ext_grid_column_Boolean from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Boolean.js';
import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCBooleancolumn extends Ext_grid_column_Boolean {
    constructor() {
        super ([], []);
        this.xtype = 'booleancolumn';
    }

}
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(EWCBooleancolumn));

