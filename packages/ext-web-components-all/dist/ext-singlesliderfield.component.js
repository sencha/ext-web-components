import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSinglesliderfieldComponent =
/*#__PURE__*/
function (_Ext_field_SingleSlid) {
  _inheritsLoose(ExtSinglesliderfieldComponent, _Ext_field_SingleSlid);

  function ExtSinglesliderfieldComponent() {
    var _this;

    _this = _Ext_field_SingleSlid.call(this, [], []) || this;
    _this.xtype = 'singlesliderfield';
    return _this;
  }

  return ExtSinglesliderfieldComponent;
}(Ext_field_SingleSlider); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-singlesliderfield', ExtSinglesliderfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-singlesliderfield', HTMLParsedElement.withParsedCallback(ExtSinglesliderfieldComponent));