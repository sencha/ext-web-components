import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row_Component from './Ext/grid/Row';
export var ExtGridrowComponent =
/*#__PURE__*/
function (_Ext_grid_Row_Compone) {
  _inheritsLoose(ExtGridrowComponent, _Ext_grid_Row_Compone);

  function ExtGridrowComponent() {
    return _Ext_grid_Row_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtGridrowComponent;
}(Ext_grid_Row_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridrow', ExtGridrowComponent);
  });
})();