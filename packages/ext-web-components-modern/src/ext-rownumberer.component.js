//import Ext_grid_column_RowNumberer from '@sencha/ext-runtime-base/dist/./Ext/grid/column/RowNumberer.js';
import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRownumberer extends Ext_grid_column_RowNumberer {
    constructor() {
        super ([], []);
        this.xtype = 'rownumberer';
    }

}
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(EWCRownumberer));

