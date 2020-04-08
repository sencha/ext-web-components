import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

export default class EWCComponent extends Ext_AbstractComponent {
  constructor() {
    super ([], []);
    this.xtype = 'component';
  }
}
try {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
  }
}
catch(e) {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', EWCComponent);
  }
}
