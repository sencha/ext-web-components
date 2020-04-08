import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridsummaryrow extends Ext_grid_SummaryRow {
  constructor() {
    super ([], []);
    this.xtype = 'gridsummaryrow';
  }
}
try {
  if (window.customElements.get('ext-gridsummaryrow') == undefined) {
    window.customElements.define('ext-gridsummaryrow', ElementParser.withParsedCallback(EWCGridsummaryrow));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridsummaryrow') == undefined) {
    window.customElements.define('ext-gridsummaryrow', EWCGridsummaryrow);
  }
}
