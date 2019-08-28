import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_SingleSlider_Component from './Ext/field/SingleSlider';
export var ExtSinglesliderfieldComponent =
/*#__PURE__*/
function (_Ext_field_SingleSlid) {
  _inheritsLoose(ExtSinglesliderfieldComponent, _Ext_field_SingleSlid);

  function ExtSinglesliderfieldComponent() {
    return _Ext_field_SingleSlid.call(this, '', '', {}, '') || this;
  }

  return ExtSinglesliderfieldComponent;
}(Ext_field_SingleSlider_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-singlesliderfield', ExtSinglesliderfieldComponent);
  });
})();