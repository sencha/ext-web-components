import Ext_menu_Bar from './Ext/menu/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCMenubar extends Ext_menu_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'menubar';
  }
}
try {
  window.customElements.define('ext-menubar', ElementParser.withParsedCallback(EWCMenubar));
}
catch(e) {
  window.customElements.define('ext-menubar', EWCMenubar);
}
