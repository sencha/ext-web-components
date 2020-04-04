import Ext_Image from './Ext/Image.js';
import ElementParser from './common/ElementParser.js';

export default class EWCImg extends Ext_Image {
  constructor() {
    super ([], []);
    this.xtype = 'img';
  }
}
try {
  if (window.customElements.get('ext-img') == undefined) {
    window.customElements.define('ext-img', ElementParser.withParsedCallback(EWCImg));
  }
}
catch(e) {
  if (window.customElements.get('ext-img') == undefined) {
    window.customElements.define('ext-img', EWCImg);
  }
}
