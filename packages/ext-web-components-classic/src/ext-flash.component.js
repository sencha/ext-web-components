import Ext_FlashComponent from './Ext/FlashComponent.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCFlash extends Ext_FlashComponent {
  constructor() {
    super ([], []);
    this.xtype = 'flash';
  }
}
try {
  window.customElements.define('ext-flash', ElementParser.withParsedCallback(EWCFlash));
}
catch(e) {
  window.customElements.define('ext-flash', EWCFlash);
}
