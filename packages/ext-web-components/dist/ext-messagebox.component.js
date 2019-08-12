import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox_Component from './Ext/MessageBox';
export var ExtMessageboxComponent =
/*#__PURE__*/
function (_Ext_MessageBox_Compo) {
  _inheritsLoose(ExtMessageboxComponent, _Ext_MessageBox_Compo);

  function ExtMessageboxComponent() {
    return _Ext_MessageBox_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtMessageboxComponent;
}(Ext_MessageBox_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-messagebox', ExtMessageboxComponent);
  });
})();