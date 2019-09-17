import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_CellEditor_Component from './Ext/grid/CellEditor';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCelleditorComponent =
/*#__PURE__*/
function (_Ext_grid_CellEditor_) {
  _inheritsLoose(ExtCelleditorComponent, _Ext_grid_CellEditor_);

  function ExtCelleditorComponent() {
    var _this;

    _this = _Ext_grid_CellEditor_.call(this) || this;
    _this.xtype = 'celleditor';
    return _this;
  }

  return ExtCelleditorComponent;
}(Ext_grid_CellEditor_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-celleditor', ExtCelleditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditorComponent));