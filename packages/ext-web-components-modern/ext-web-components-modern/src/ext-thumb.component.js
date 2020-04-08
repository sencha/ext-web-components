import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import ElementParser from './common/ElementParser.js';

export default class EWCThumb extends Ext_slider_Thumb {
  constructor() {
    super ([], []);
    this.xtype = 'thumb';
  }
}
try {
  if (window.customElements.get('ext-thumb') == undefined) {
    window.customElements.define('ext-thumb', ElementParser.withParsedCallback(EWCThumb));
  }
}
catch(e) {
  if (window.customElements.get('ext-thumb') == undefined) {
    window.customElements.define('ext-thumb', EWCThumb);
  }
}
