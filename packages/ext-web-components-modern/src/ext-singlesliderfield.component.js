import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import ElementParser from './ElementParser.js';

export default class EWCSinglesliderfield extends Ext_field_SingleSlider {
  constructor() {
    super ([], []);
    this.xtype = 'singlesliderfield';
  }
}
try {
  window.customElements.define('ext-singlesliderfield', ElementParser.withParsedCallback(EWCSinglesliderfield));
}
catch(e) {
  window.customElements.define('ext-singlesliderfield', EWCSinglesliderfield);
}
