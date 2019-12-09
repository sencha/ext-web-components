import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_field_SingleSlider from '@sencha/ext-runtime-base/dist/./Ext/field/SingleSlider.js';
import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import ElementParser from './ElementParser.js';

var EWCSinglesliderfield =
/*#__PURE__*/
function (_Ext_field_SingleSlid) {
  _inheritsLoose(EWCSinglesliderfield, _Ext_field_SingleSlid);

  function EWCSinglesliderfield() {
    var _this;

    _this = _Ext_field_SingleSlid.call(this, [], []) || this;
    _this.xtype = 'singlesliderfield';
    return _this;
  }

  return EWCSinglesliderfield;
}(Ext_field_SingleSlider);

export { EWCSinglesliderfield as default };
window.customElements.define('ext-singlesliderfield', ElementParser.withParsedCallback(EWCSinglesliderfield));