import Ext_grid_cell_Boolean_Component from './Ext/grid/cell/Boolean'

export class ExtBooleancellComponent extends Ext_grid_cell_Boolean_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-booleancell', ExtBooleancellComponent);
    });
})();
