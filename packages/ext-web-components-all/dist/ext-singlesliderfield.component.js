import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSinglesliderfield =
/*#__PURE__*/
function (_Ext_field_SingleSlid) {
  _inheritsLoose(ExtSinglesliderfield, _Ext_field_SingleSlid);

  function ExtSinglesliderfield() {
    var _this;

    _this = _Ext_field_SingleSlid.call(this, [], []) || this;
    _this.xtype = 'singlesliderfield';
    return _this;
  }

  return ExtSinglesliderfield;
}(Ext_field_SingleSlider);

export { ExtSinglesliderfield as default };
window.customElements.define('ext-singlesliderfield', HTMLParsedElement.withParsedCallback(ExtSinglesliderfield));