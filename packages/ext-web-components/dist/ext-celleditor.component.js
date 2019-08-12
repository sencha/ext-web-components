import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_CellEditor_Component from './Ext/grid/CellEditor';
export var ExtCelleditorComponent =
/*#__PURE__*/
function (_Ext_grid_CellEditor_) {
  _inheritsLoose(ExtCelleditorComponent, _Ext_grid_CellEditor_);

  function ExtCelleditorComponent() {
    return _Ext_grid_CellEditor_.call(this, '', '', {}, '') || this;
  }

  return ExtCelleditorComponent;
}(Ext_grid_CellEditor_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-celleditor', ExtCelleditorComponent);
  });
})();