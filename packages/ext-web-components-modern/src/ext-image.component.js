import Ext_Image from './Ext/Image.js';
import ElementParser from './ElementParser.js';

export default class EWCImage extends Ext_Image {
  constructor() {
    super ([], []);
    this.xtype = 'image';
  }
}
window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
