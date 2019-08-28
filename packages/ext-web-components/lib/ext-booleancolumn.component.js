import Ext_grid_column_Boolean_Component from './Ext/grid/column/Boolean'

export class ExtBooleancolumnComponent extends Ext_grid_column_Boolean_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-booleancolumn', ExtBooleancolumnComponent);
    });
})();
