import Ext_Img from './Ext/Img.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCImage extends Ext_Img {
  constructor() {
    super ([], []);
    this.xtype = 'image';
  }
}
try {
  window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
}
catch(e) {
  window.customElements.define('ext-image', EWCImage);
}
