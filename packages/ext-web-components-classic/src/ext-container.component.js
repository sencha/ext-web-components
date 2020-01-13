import Ext_AbstractContainer from './Ext/AbstractContainer.js';
import ElementParser from './ElementParser.js';

export default class EWCContainer extends Ext_AbstractContainer {
  constructor() {
    super ([], []);
    this.xtype = 'container';
  }
}
window.customElements.define('ext-container', ElementParser.withParsedCallback(EWCContainer));
