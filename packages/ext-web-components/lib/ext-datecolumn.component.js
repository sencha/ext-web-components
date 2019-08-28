import Ext_grid_column_Date_Component from './Ext/grid/column/Date'

export class ExtDatecolumnComponent extends Ext_grid_column_Date_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datecolumn', ExtDatecolumnComponent);
    });
})();
