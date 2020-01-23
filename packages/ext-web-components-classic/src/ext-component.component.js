import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './ElementParser.js';

export default class EWCComponent extends Ext_AbstractComponent {
  constructor() {
    super ([], []);
    this.xtype = 'component';
  }
}
try {
  window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
}
catch(e) {
  window.customElements.define('ext-component', EWCComponent);
}
