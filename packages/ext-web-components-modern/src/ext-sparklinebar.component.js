import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSparklinebar extends Ext_sparkline_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebar';
  }
}
try {
  window.customElements.define('ext-sparklinebar', ElementParser.withParsedCallback(EWCSparklinebar));
}
catch(e) {
  window.customElements.define('ext-sparklinebar', EWCSparklinebar);
}
