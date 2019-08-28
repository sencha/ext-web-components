import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container_Component from './Ext/field/Container';
export var ExtContainerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Container_) {
  _inheritsLoose(ExtContainerfieldComponent, _Ext_field_Container_);

  function ExtContainerfieldComponent() {
    return _Ext_field_Container_.call(this, '', '', {}, '') || this;
  }

  return ExtContainerfieldComponent;
}(Ext_field_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-containerfield', ExtContainerfieldComponent);
  });
})();