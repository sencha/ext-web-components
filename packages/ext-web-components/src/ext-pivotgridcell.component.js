//import Ext_pivot_cell_Cell from '@sencha/ext-runtime-base/dist/./Ext/pivot/cell/Cell.js';
import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotgridcell extends Ext_pivot_cell_Cell {
    constructor() {
        super ([], []);
        this.xtype = 'pivotgridcell';
    }

}
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(EWCPivotgridcell));

