import Ext_TitleBar from './Ext/TitleBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTitlebar extends Ext_TitleBar {
  constructor() {
    super ([], []);
    this.xtype = 'titlebar';
  }
}
try {
  if (window.customElements.get('ext-titlebar') == undefined) {
    window.customElements.define('ext-titlebar', ElementParser.withParsedCallback(EWCTitlebar));
  }
}
catch(e) {
  if (window.customElements.get('ext-titlebar') == undefined) {
    window.customElements.define('ext-titlebar', EWCTitlebar);
  }
}
