import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar_Component from './Ext/Toolbar';
export var ExtToolbarComponent =
/*#__PURE__*/
function (_Ext_Toolbar_Componen) {
  _inheritsLoose(ExtToolbarComponent, _Ext_Toolbar_Componen);

  function ExtToolbarComponent() {
    return _Ext_Toolbar_Componen.call(this, '', '', {}, '') || this;
  }

  return ExtToolbarComponent;
}(Ext_Toolbar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-toolbar', ExtToolbarComponent);
  });
})();