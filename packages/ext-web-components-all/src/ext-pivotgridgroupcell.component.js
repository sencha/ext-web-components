import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotgridgroupcellComponent extends Ext_pivot_cell_Group {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgridgroupcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(ExtPivotgridgroupcellComponent))
