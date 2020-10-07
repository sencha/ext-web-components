import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPolar extends Ext_chart_PolarChart {
  constructor() {
    super ([], []);
    this.xtype = 'polar';
  }
}
try {
  if (window.customElements.get('ext-polar') == undefined) {
    window.customElements.define('ext-polar', ElementParser.withParsedCallback(EWCPolar));
  }
}
catch(e) {
  if (window.customElements.get('ext-polar') == undefined) {
    window.customElements.define('ext-polar', EWCPolar);
  }
}
