import Ext_grid_Grid_Component from './Ext/grid/Grid'

export class ExtGridComponent extends Ext_grid_Grid_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-grid', ExtGridComponent);
    });
})();
