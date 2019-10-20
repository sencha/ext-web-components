import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotgridgroupcell extends Ext_pivot_cell_Group {
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
//        window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(ExtPivotgridgroupcell))
//export default reactify(ExtPivotgridgroupcell);