import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import ElementParser from './ElementParser.js';

export default class EWCToggleslider extends Ext_slider_Toggle {
  constructor() {
    super ([], []);
    this.xtype = 'toggleslider';
  }
}
window.customElements.define('ext-toggleslider', ElementParser.withParsedCallback(EWCToggleslider));
