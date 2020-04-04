import Ext_panel_Time from './Ext/panel/Time.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTimepanel extends Ext_panel_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timepanel';
  }
}
try {
  if (window.customElements.get('ext-timepanel') == undefined) {
    window.customElements.define('ext-timepanel', ElementParser.withParsedCallback(EWCTimepanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-timepanel') == undefined) {
    window.customElements.define('ext-timepanel', EWCTimepanel);
  }
}
