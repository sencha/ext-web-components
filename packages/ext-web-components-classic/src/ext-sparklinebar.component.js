import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSparklinebar extends Ext_sparkline_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'sparklinebar';
  }
}
try {
  if (window.customElements.get('ext-sparklinebar') == undefined) {
    window.customElements.define('ext-sparklinebar', ElementParser.withParsedCallback(EWCSparklinebar));
  }
}
catch(e) {
  if (window.customElements.get('ext-sparklinebar') == undefined) {
    window.customElements.define('ext-sparklinebar', EWCSparklinebar);
  }
}
