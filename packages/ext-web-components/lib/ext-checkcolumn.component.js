import Ext_grid_column_Check_Component from './Ext/grid/column/Check'

export class ExtCheckcolumnComponent extends Ext_grid_column_Check_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-checkcolumn', ExtCheckcolumnComponent);
    });
})();
