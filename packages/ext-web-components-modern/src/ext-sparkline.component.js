import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSparkline extends Ext_sparkline_Base {
  constructor() {
    super ([], []);
    this.xtype = 'sparkline';
  }
}
try {
  window.customElements.define('ext-sparkline', ElementParser.withParsedCallback(EWCSparkline));
}
catch(e) {
  window.customElements.define('ext-sparkline', EWCSparkline);
}
