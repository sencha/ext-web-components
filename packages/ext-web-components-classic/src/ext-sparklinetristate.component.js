import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSparklinetristate extends Ext_sparkline_TriState {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinetristate';
  }
}
try {
  window.customElements.define('ext-sparklinetristate', ElementParser.withParsedCallback(EWCSparklinetristate));
}
catch(e) {
  window.customElements.define('ext-sparklinetristate', EWCSparklinetristate);
}
