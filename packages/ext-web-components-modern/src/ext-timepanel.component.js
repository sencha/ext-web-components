import Ext_panel_Time from './Ext/panel/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimepanel extends Ext_panel_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timepanel';
  }
}
window.customElements.define('ext-timepanel', ElementParser.withParsedCallback(EWCTimepanel));
