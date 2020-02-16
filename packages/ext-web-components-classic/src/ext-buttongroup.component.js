import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCButtongroup extends Ext_ButtonGroup {
  constructor() {
    super ([], []);
    this.xtype = 'buttongroup';
  }
}
try {
  window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));
}
catch(e) {
  window.customElements.define('ext-buttongroup', EWCButtongroup);
}
