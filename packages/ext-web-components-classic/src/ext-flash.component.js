import Ext_FlashComponent from './Ext/FlashComponent.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFlash extends Ext_FlashComponent {
  constructor() {
    super ([], []);
    this.xtype = 'flash';
  }
}
try {
  if (window.customElements.get('ext-flash') == undefined) {
    window.customElements.define('ext-flash', ElementParser.withParsedCallback(EWCFlash));
  }
}
catch(e) {
  if (window.customElements.get('ext-flash') == undefined) {
    window.customElements.define('ext-flash', EWCFlash);
  }
}
