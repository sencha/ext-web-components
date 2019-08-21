import Ext_pivot_Grid_Component from './Ext/pivot/Grid'

export class ExtPivotgridComponent extends Ext_pivot_Grid_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotgrid', ExtPivotgridComponent);
    });
})();
