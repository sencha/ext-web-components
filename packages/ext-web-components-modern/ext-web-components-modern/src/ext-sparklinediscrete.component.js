import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinediscrete extends Ext_sparkline_Discrete {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinediscrete';
  }
}
try {
  if (window.customElements.get('ext-sparklinediscrete') == undefined) {
    window.customElements.define('ext-sparklinediscrete', ElementParser.withParsedCallback(EWCSparklinediscrete));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinediscrete') == undefined) {
    window.customElements.define('ext-sparklinediscrete', EWCSparklinediscrete);
  }
}
