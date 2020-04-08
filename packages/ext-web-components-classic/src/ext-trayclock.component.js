import Ext_ux_desktop_TrayClock from './Ext/ux/desktop/TrayClock.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTrayclock extends Ext_ux_desktop_TrayClock {
  constructor() {
    super ([], []);
    this.xtype = 'trayclock';
  }
}
try {
  if (window.customElements.get('ext-trayclock') == undefined) {
    window.customElements.define('ext-trayclock', ElementParser.withParsedCallback(EWCTrayclock));
  }
}
catch(e) {
  if (window.customElements.get('ext-trayclock') == undefined) {
    window.customElements.define('ext-trayclock', EWCTrayclock);
  }
}
