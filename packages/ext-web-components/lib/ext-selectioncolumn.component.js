import Ext_grid_column_Selection_Component from './Ext/grid/column/Selection'

export class ExtSelectioncolumnComponent extends Ext_grid_column_Selection_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-selectioncolumn', ExtSelectioncolumnComponent);
    });
})();
