import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './ElementParser.js';

export default class EWCChart extends Ext_chart_Chart {
  constructor() {
    super ([], []);
    this.xtype = 'chart';
  }
}
window.customElements.define('ext-chart', ElementParser.withParsedCallback(EWCChart));
