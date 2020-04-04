import Ext_menu_Bar from './Ext/menu/Bar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenubar extends Ext_menu_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'menubar';
  }
}
try {
  if (window.customElements.get('ext-menubar') == undefined) {
    window.customElements.define('ext-menubar', ElementParser.withParsedCallback(EWCMenubar));
  }
}
catch(e) {
  if (window.customElements.get('ext-menubar') == undefined) {
    window.customElements.define('ext-menubar', EWCMenubar);
  }
}
