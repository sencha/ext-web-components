import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparkline extends Ext_sparkline_Base {
  constructor() {
    super ([], []);
    this.xtype = 'sparkline';
  }
}
try {
  if (window.customElements.get('ext-sparkline') == undefined) {
    window.customElements.define('ext-sparkline', ElementParser.withParsedCallback(EWCSparkline));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparkline') == undefined) {
    window.customElements.define('ext-sparkline', EWCSparkline);
  }
}
