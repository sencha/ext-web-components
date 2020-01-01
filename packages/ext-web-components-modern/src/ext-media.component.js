import Ext_Media from './Ext/Media.js';
import ElementParser from './ElementParser.js';

export default class EWCMedia extends Ext_Media {
  constructor() {
    super ([], []);
    this.xtype = 'media';
  }
}
window.customElements.define('ext-media', ElementParser.withParsedCallback(EWCMedia));
