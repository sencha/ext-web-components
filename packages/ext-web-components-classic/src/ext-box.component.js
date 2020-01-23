import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './ElementParser.js';

export default class EWCBox extends Ext_AbstractComponent {
  constructor() {
    super ([], []);
    this.xtype = 'box';
  }
}
try {
  window.customElements.define('ext-box', ElementParser.withParsedCallback(EWCBox));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-box', EWCBox);
}
