import Ext_chart_Legend from './Ext/chart/Legend.js';
import ElementParser from './ElementParser.js';

export default class EWCLegend extends Ext_chart_Legend {
  constructor() {
    super ([], []);
    this.xtype = 'legend';
  }
}
window.customElements.define('ext-legend', ElementParser.withParsedCallback(EWCLegend));
