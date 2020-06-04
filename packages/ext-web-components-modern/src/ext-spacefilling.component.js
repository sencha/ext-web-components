import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSpacefilling extends Ext_chart_SpaceFillingChart {
  constructor() {
    super ([], []);
    this.xtype = 'spacefilling';
  }
}
try {
  if (window.customElements.get('ext-spacefilling') == undefined) {
    window.customElements.define('ext-spacefilling', ElementParser.withParsedCallback(EWCSpacefilling));
  }
}
catch(e) {
  if (window.customElements.get('ext-spacefilling') == undefined) {
    window.customElements.define('ext-spacefilling', EWCSpacefilling);
  }
}
