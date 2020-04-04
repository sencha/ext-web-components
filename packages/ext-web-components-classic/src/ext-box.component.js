import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBox extends Ext_AbstractComponent {
  constructor() {
    super ([], []);
    this.xtype = 'box';
  }
}
try {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', ElementParser.withParsedCallback(EWCBox));
  }
}
catch(e) {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', EWCBox);
  }
}
