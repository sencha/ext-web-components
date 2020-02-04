import Ext_Img from './Ext/Img.js';
import ElementParser from './ElementParser.js';

export default class EWCImagecomponent extends Ext_Img {
  constructor() {
    super ([], []);
    this.xtype = 'imagecomponent';
  }
}
try {
  window.customElements.define('ext-imagecomponent', ElementParser.withParsedCallback(EWCImagecomponent));
}
catch(e) {
  window.customElements.define('ext-imagecomponent', EWCImagecomponent);
}
