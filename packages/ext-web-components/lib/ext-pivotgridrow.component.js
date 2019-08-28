import Ext_pivot_Row_Component from './Ext/pivot/Row'

export class ExtPivotgridrowComponent extends Ext_pivot_Row_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotgridrow', ExtPivotgridrowComponent);
    });
})();
