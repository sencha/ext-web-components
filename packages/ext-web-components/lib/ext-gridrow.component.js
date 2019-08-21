import Ext_grid_Row_Component from './Ext/grid/Row'

export class ExtGridrowComponent extends Ext_grid_Row_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridrow', ExtGridrowComponent);
    });
})();
