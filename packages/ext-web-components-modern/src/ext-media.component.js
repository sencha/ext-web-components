import Ext_Media from './Ext/Media.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMedia extends Ext_Media {
  constructor() {
    super ([], []);
    this.xtype = 'media';
  }
}
try {
  window.customElements.define('ext-media', ElementParser.withParsedCallback(EWCMedia));
}
catch(e) {
  window.customElements.define('ext-media', EWCMedia);
}
