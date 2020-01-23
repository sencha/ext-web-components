import Ext_container_Container from './Ext/container/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCContainer extends Ext_container_Container {
  constructor() {
    super ([], []);
    this.xtype = 'container';
  }
}
try {
  window.customElements.define('ext-container', ElementParser.withParsedCallback(EWCContainer));
}
catch(e) {
  window.customElements.define('ext-container', EWCContainer);
}
