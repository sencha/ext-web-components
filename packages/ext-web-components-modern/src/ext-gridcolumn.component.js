//import Ext_grid_column_Template from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Template.js';
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridcolumn extends Ext_grid_column_Template {
    constructor() {
        super ([], []);
        this.xtype = 'gridcolumn';
    }

}
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(EWCGridcolumn));

