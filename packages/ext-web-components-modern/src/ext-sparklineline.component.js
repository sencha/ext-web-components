import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklineline extends Ext_sparkline_Line {
  constructor() {
    super ([], []);
    this.xtype = 'sparklineline';
  }
}
try {
  if (window.customElements.get('ext-sparklineline') == undefined) {
    window.customElements.define('ext-sparklineline', ElementParser.withParsedCallback(EWCSparklineline));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklineline') == undefined) {
    window.customElements.define('ext-sparklineline', EWCSparklineline);
  }
}
