import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import ElementParser from './ElementParser.js';

export default class EWCPolar extends Ext_chart_PolarChart {
  constructor() {
    super ([], []);
    this.xtype = 'polar';
  }
}
window.customElements.define('ext-polar', ElementParser.withParsedCallback(EWCPolar));
