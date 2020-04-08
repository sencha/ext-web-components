import Ext_ux_event_RecorderManager from './Ext/ux/event/RecorderManager.js';
import ElementParser from './common/ElementParser.js';

export default class EWCEventrecordermanager extends Ext_ux_event_RecorderManager {
  constructor() {
    super ([], []);
    this.xtype = 'eventrecordermanager';
  }
}
try {
  if (window.customElements.get('ext-eventrecordermanager') == undefined) {
    window.customElements.define('ext-eventrecordermanager', ElementParser.withParsedCallback(EWCEventrecordermanager));
  }
}
catch(e) {
  if (window.customElements.get('ext-eventrecordermanager') == undefined) {
    window.customElements.define('ext-eventrecordermanager', EWCEventrecordermanager);
  }
}
