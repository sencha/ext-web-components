import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridsummaryrow extends Ext_grid_SummaryRow {
    constructor() {
        super ([],[])
        this.xtype = 'gridsummaryrow';
    }
}
window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrow))
