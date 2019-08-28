import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet_Component from './Ext/Sheet';
export var ExtSheetComponent =
/*#__PURE__*/
function (_Ext_Sheet_Component) {
  _inheritsLoose(ExtSheetComponent, _Ext_Sheet_Component);

  function ExtSheetComponent() {
    return _Ext_Sheet_Component.call(this, '', '', {}, '') || this;
  }

  return ExtSheetComponent;
}(Ext_Sheet_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sheet', ExtSheetComponent);
  });
})();