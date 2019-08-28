import Ext_grid_column_RowNumberer_Component from './Ext/grid/column/RowNumberer'

export class ExtRownumbererComponent extends Ext_grid_column_RowNumberer_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-rownumberer', ExtRownumbererComponent);
    });
})();
