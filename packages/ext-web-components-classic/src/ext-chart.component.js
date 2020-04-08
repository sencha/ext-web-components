import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './common/ElementParser.js';

export default class EWCChart extends Ext_chart_Chart {
  constructor() {
    super ([], []);
    this.xtype = 'chart';
  }
}
try {
  if (window.customElements.get('ext-chart') == undefined) {
    window.customElements.define('ext-chart', ElementParser.withParsedCallback(EWCChart));
  }
}
catch(e) {
  if (window.customElements.get('ext-chart') == undefined) {
    window.customElements.define('ext-chart', EWCChart);
  }
}
