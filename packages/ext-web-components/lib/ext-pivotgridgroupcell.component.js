import Ext_pivot_cell_Group_Component from './Ext/pivot/cell/Group'

export class ExtPivotgridgroupcellComponent extends Ext_pivot_cell_Group_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcellComponent);
    });
})();
