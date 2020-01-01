import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import ElementParser from './ElementParser.js';

export default class EWCThumb extends Ext_slider_Thumb {
  constructor() {
    super ([], []);
    this.xtype = 'thumb';
  }
}
window.customElements.define('ext-thumb', ElementParser.withParsedCallback(EWCThumb));
