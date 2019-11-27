//import Ext_grid_cell_Number from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Number.js';
import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCNumbercell extends Ext_grid_cell_Number {
    constructor() {
        super ([], []);
        this.xtype = 'numbercell';
    }

}
window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(EWCNumbercell));

