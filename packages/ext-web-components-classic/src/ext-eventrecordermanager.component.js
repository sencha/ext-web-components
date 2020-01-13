import Ext_ux_event_RecorderManager from './Ext/ux/event/RecorderManager.js';
import ElementParser from './ElementParser.js';

export default class EWCEventrecordermanager extends Ext_ux_event_RecorderManager {
  constructor() {
    super ([], []);
    this.xtype = 'eventrecordermanager';
  }
}
window.customElements.define('ext-eventrecordermanager', ElementParser.withParsedCallback(EWCEventrecordermanager));
