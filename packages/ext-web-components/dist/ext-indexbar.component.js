import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_IndexBar_Component from './Ext/IndexBar';
export var ExtIndexbarComponent =
/*#__PURE__*/
function (_Ext_IndexBar_Compone) {
  _inheritsLoose(ExtIndexbarComponent, _Ext_IndexBar_Compone);

  function ExtIndexbarComponent() {
    return _Ext_IndexBar_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtIndexbarComponent;
}(Ext_IndexBar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-indexbar', ExtIndexbarComponent);
  });
})();