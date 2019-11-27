//import Ext_grid_cell_Boolean from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Boolean.js';
import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCBooleancell extends Ext_grid_cell_Boolean {
    constructor() {
        super ([], []);
        this.xtype = 'booleancell';
    }

}
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(EWCBooleancell));

