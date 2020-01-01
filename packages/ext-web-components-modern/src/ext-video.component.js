import Ext_Video from './Ext/Video.js';
import ElementParser from './ElementParser.js';

export default class EWCVideo extends Ext_Video {
  constructor() {
    super ([], []);
    this.xtype = 'video';
  }
}
window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
