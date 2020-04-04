import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCButtongroup extends Ext_ButtonGroup {
  constructor() {
    super ([], []);
    this.xtype = 'buttongroup';
  }
}
try {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));
  }
}
catch(e) {
  if (window.customElements.get('ext-buttongroup') == undefined) {
    window.customElements.define('ext-buttongroup', EWCButtongroup);
  }
}
