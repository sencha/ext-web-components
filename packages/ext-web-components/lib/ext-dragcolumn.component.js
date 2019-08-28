import Ext_grid_column_Drag_Component from './Ext/grid/column/Drag'

export class ExtDragcolumnComponent extends Ext_grid_column_Drag_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-dragcolumn', ExtDragcolumnComponent);
    });
})();
