import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCChartnavigator extends Ext_chart_navigator_Container {
  constructor() {
    super ([], []);
    this.xtype = 'chartnavigator';
  }
}
try {
  window.customElements.define('ext-chartnavigator', ElementParser.withParsedCallback(EWCChartnavigator));
}
catch(e) {
  window.customElements.define('ext-chartnavigator', EWCChartnavigator);
}
