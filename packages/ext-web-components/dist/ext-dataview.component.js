import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_DataView_Component from './Ext/DataView';
export var ExtDataviewComponent =
/*#__PURE__*/
function (_Ext_DataView_Compone) {
  _inheritsLoose(ExtDataviewComponent, _Ext_DataView_Compone);

  function ExtDataviewComponent() {
    return _Ext_DataView_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtDataviewComponent;
}(Ext_DataView_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-dataview', ExtDataviewComponent);
  });
})();