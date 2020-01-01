import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import ElementParser from './ElementParser.js';

export default class EWCSinglesliderfield extends Ext_field_SingleSlider {
  constructor() {
    super ([], []);
    this.xtype = 'singlesliderfield';
  }
}
window.customElements.define('ext-singlesliderfield', ElementParser.withParsedCallback(EWCSinglesliderfield));
