import Ext_TitleBar from './Ext/TitleBar.js';
import ElementParser from './ElementParser.js';

export default class EWCTitlebar extends Ext_TitleBar {
  constructor() {
    super ([], []);
    this.xtype = 'titlebar';
  }
}
window.customElements.define('ext-titlebar', ElementParser.withParsedCallback(EWCTitlebar));
