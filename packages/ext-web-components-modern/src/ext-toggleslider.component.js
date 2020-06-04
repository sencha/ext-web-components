import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import ElementParser from './common/ElementParser.js';

export default class EWCToggleslider extends Ext_slider_Toggle {
  constructor() {
    super ([], []);
    this.xtype = 'toggleslider';
  }
}
try {
  if (window.customElements.get('ext-toggleslider') == undefined) {
    window.customElements.define('ext-toggleslider', ElementParser.withParsedCallback(EWCToggleslider));
  }
}
catch(e) {
  if (window.customElements.get('ext-toggleslider') == undefined) {
    window.customElements.define('ext-toggleslider', EWCToggleslider);
  }
}
