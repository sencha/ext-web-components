import Ext_ux_desktop_TrayClock from './Ext/ux/desktop/TrayClock.js';
import ElementParser from './ElementParser.js';

export default class EWCTrayclock extends Ext_ux_desktop_TrayClock {
  constructor() {
    super ([], []);
    this.xtype = 'trayclock';
  }
}
window.customElements.define('ext-trayclock', ElementParser.withParsedCallback(EWCTrayclock));
