import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import ElementParser from './ElementParser.js';

export default class EWCSpacefilling extends Ext_chart_SpaceFillingChart {
  constructor() {
    super ([], []);
    this.xtype = 'spacefilling';
  }
}
try {
  window.customElements.define('ext-spacefilling', ElementParser.withParsedCallback(EWCSpacefilling));
}
catch(e) {
  window.customElements.define('ext-spacefilling', EWCSpacefilling);
}
