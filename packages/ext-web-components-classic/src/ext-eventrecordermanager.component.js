import Ext_ux_event_RecorderManager from './Ext/ux/event/RecorderManager.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCEventrecordermanager extends Ext_ux_event_RecorderManager {
  constructor() {
    super ([], []);
    this.xtype = 'eventrecordermanager';
  }
}
try {
  window.customElements.define('ext-eventrecordermanager', ElementParser.withParsedCallback(EWCEventrecordermanager));
}
catch(e) {
  window.customElements.define('ext-eventrecordermanager', EWCEventrecordermanager);
}
