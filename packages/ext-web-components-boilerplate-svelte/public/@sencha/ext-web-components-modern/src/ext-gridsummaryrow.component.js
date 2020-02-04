import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import ElementParser from './ElementParser.js';

export default class EWCGridsummaryrow extends Ext_grid_SummaryRow {
  constructor() {
    super ([], []);
    this.xtype = 'gridsummaryrow';
  }
}
try {
  window.customElements.define('ext-gridsummaryrow', ElementParser.withParsedCallback(EWCGridsummaryrow));
}
catch(e) {
  window.customElements.define('ext-gridsummaryrow', EWCGridsummaryrow);
}
