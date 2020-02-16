import Ext_Video from './Ext/Video.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCVideo extends Ext_Video {
  constructor() {
    super ([], []);
    this.xtype = 'video';
  }
}
try {
  window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
}
catch(e) {
  window.customElements.define('ext-video', EWCVideo);
}
