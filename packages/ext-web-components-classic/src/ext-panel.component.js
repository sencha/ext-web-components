import Ext_Panel from './Ext/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPanel extends Ext_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'panel';
  }
}
try {
  if (window.customElements.get('ext-panel') == undefined) {
    window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-panel') == undefined) {
    window.customElements.define('ext-panel', EWCPanel);
  }
}
