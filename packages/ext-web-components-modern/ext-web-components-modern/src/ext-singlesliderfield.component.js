import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSinglesliderfield extends Ext_field_SingleSlider {
  constructor() {
    super ([], []);
    this.xtype = 'singlesliderfield';
  }
}
try {
  if (window.customElements.get('ext-singlesliderfield') == undefined) {
    window.customElements.define('ext-singlesliderfield', ElementParser.withParsedCallback(EWCSinglesliderfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-singlesliderfield') == undefined) {
    window.customElements.define('ext-singlesliderfield', EWCSinglesliderfield);
  }
}
