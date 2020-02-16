import Ext_Image from './Ext/Image.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCImg extends Ext_Image {
  constructor() {
    super ([], []);
    this.xtype = 'img';
  }
}
try {
  window.customElements.define('ext-img', ElementParser.withParsedCallback(EWCImg));
}
catch(e) {
  window.customElements.define('ext-img', EWCImg);
}
