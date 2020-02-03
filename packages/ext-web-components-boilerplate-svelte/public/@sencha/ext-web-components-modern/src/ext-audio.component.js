import Ext_Audio from './Ext/Audio.js';
import ElementParser from './ElementParser.js';

export default class EWCAudio extends Ext_Audio {
  constructor() {
    super ([], []);
    this.xtype = 'audio';
  }
}
try {
  window.customElements.define('ext-audio', ElementParser.withParsedCallback(EWCAudio));
}
catch(e) {
  window.customElements.define('ext-audio', EWCAudio);
}
