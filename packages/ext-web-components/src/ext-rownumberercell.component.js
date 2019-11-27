//import Ext_grid_cell_RowNumberer from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/RowNumberer.js';
import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRownumberercell extends Ext_grid_cell_RowNumberer {
    constructor() {
        super ([], []);
        this.xtype = 'rownumberercell';
    }

}
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(EWCRownumberercell));

