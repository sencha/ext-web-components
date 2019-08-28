import Ext_grid_cell_Base_Component from './Ext/grid/cell/Base'

export class ExtGridcellbaseComponent extends Ext_grid_cell_Base_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridcellbase', ExtGridcellbaseComponent);
    });
})();
