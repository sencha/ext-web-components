import Ext_AbstractContainer from './Ext/AbstractContainer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCContainer extends Ext_AbstractContainer {
  constructor() {
    super ([], []);
    this.xtype = 'container';
  }
}
try {
  if (window.customElements.get('ext-container') == undefined) {
    window.customElements.define('ext-container', ElementParser.withParsedCallback(EWCContainer));
  }
}
catch(e) {
  if (window.customElements.get('ext-container') == undefined) {
    window.customElements.define('ext-container', EWCContainer);
  }
}
