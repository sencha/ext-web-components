//import Ext_pivot_cell_Group from '@sencha/ext-runtime-base/dist/./Ext/pivot/cell/Group.js';
import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotgridgroupcell extends Ext_pivot_cell_Group {
    constructor() {
        super ([], []);
        this.xtype = 'pivotgridgroupcell';
    }

}
window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(EWCPivotgridgroupcell));

