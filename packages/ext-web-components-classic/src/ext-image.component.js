import Ext_Img from './Ext/Img.js';
import ElementParser from './common/ElementParser.js';

export default class EWCImage extends Ext_Img {
  constructor() {
    super ([], []);
    this.xtype = 'image';
  }
}
try {
  if (window.customElements.get('ext-image') == undefined) {
    window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
  }
}
catch(e) {
  if (window.customElements.get('ext-image') == undefined) {
    window.customElements.define('ext-image', EWCImage);
  }
}
