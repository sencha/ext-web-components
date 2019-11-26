//import Ext_grid_SummaryRow from '@sencha/ext-runtime-base/dist/./Ext/grid/SummaryRow.js';
import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridsummaryrow extends Ext_grid_SummaryRow {
    constructor() {
        super ([], []);
        this.xtype = 'gridsummaryrow';
    }

}
window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(EWCGridsummaryrow));

