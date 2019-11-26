//import Ext_grid_column_Number from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Number.js';
import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCNumbercolumn extends Ext_grid_column_Number {
    constructor() {
        super ([], []);
        this.xtype = 'numbercolumn';
    }

}
window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(EWCNumbercolumn));

