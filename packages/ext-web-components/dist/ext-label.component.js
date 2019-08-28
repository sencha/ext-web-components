import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Label_Component from './Ext/Label';
export var ExtLabelComponent =
/*#__PURE__*/
function (_Ext_Label_Component) {
  _inheritsLoose(ExtLabelComponent, _Ext_Label_Component);

  function ExtLabelComponent() {
    return _Ext_Label_Component.call(this, '', '', {}, '') || this;
  }

  return ExtLabelComponent;
}(Ext_Label_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-label', ExtLabelComponent);
  });
})();