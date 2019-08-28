import Ext_grid_column_Number_Component from './Ext/grid/column/Number'

export class ExtNumbercolumnComponent extends Ext_grid_column_Number_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-numbercolumn', ExtNumbercolumnComponent);
    });
})();
