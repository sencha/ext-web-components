import Ext_chart_Legend from './Ext/chart/Legend.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCLegend extends Ext_chart_Legend {
  constructor() {
    super ([], []);
    this.xtype = 'legend';
  }
}
try {
  window.customElements.define('ext-legend', ElementParser.withParsedCallback(EWCLegend));
}
catch(e) {
  window.customElements.define('ext-legend', EWCLegend);
}
