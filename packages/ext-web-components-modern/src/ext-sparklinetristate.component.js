import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinetristate extends Ext_sparkline_TriState {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinetristate';
  }
}
try {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', ElementParser.withParsedCallback(EWCSparklinetristate));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', EWCSparklinetristate);
  }
}
