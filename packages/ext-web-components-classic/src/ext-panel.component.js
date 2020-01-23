import Ext_Panel from './Ext/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCPanel extends Ext_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'panel';
  }
}
try {
  window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-panel', EWCPanel);
}
