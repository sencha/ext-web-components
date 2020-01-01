import Ext_Title from './Ext/Title.js';
import ElementParser from './ElementParser.js';

export default class EWCTitle extends Ext_Title {
  constructor() {
    super ([], []);
    this.xtype = 'title';
  }
}
window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
