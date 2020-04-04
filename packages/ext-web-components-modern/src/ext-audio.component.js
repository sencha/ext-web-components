import Ext_Audio from './Ext/Audio.js';
import ElementParser from './common/ElementParser.js';

export default class EWCAudio extends Ext_Audio {
  constructor() {
    super ([], []);
    this.xtype = 'audio';
  }
}
try {
  if (window.customElements.get('ext-audio') == undefined) {
    window.customElements.define('ext-audio', ElementParser.withParsedCallback(EWCAudio));
  }
}
catch(e) {
  if (window.customElements.get('ext-audio') == undefined) {
    window.customElements.define('ext-audio', EWCAudio);
  }
}
