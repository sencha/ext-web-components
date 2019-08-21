import Ext_grid_RowHeader_Component from './Ext/grid/RowHeader'

export class ExtRowheaderComponent extends Ext_grid_RowHeader_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-rowheader', ExtRowheaderComponent);
    });
})();
