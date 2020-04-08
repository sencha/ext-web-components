import Ext_chart_navigator_Container from './Ext/chart/navigator/Container.js';
import ElementParser from './common/ElementParser.js';

export default class EWCChartnavigator extends Ext_chart_navigator_Container {
  constructor() {
    super ([], []);
    this.xtype = 'chartnavigator';
  }
}
try {
  if (window.customElements.get('ext-chartnavigator') == undefined) {
    window.customElements.define('ext-chartnavigator', ElementParser.withParsedCallback(EWCChartnavigator));
  }
}
catch(e) {
  if (window.customElements.get('ext-chartnavigator') == undefined) {
    window.customElements.define('ext-chartnavigator', EWCChartnavigator);
  }
}
