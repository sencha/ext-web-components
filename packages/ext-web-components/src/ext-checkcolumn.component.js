//import Ext_grid_column_Check from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Check.js';
import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCheckcolumn extends Ext_grid_column_Check {
    constructor() {
        super ([], []);
        this.xtype = 'checkcolumn';
    }

}
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(EWCCheckcolumn));

