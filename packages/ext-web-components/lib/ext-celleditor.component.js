import Ext_grid_CellEditor_Component from './Ext/grid/CellEditor'

export class ExtCelleditorComponent extends Ext_grid_CellEditor_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-celleditor', ExtCelleditorComponent);
    });
})();
