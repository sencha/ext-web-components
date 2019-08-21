import Ext_grid_SummaryRow_Component from './Ext/grid/SummaryRow'

export class ExtGridsummaryrowComponent extends Ext_grid_SummaryRow_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrowComponent);
    });
})();
