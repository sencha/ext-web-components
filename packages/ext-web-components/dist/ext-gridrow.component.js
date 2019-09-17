import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row_Component from './Ext/grid/Row';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridrowComponent =
/*#__PURE__*/
function (_Ext_grid_Row_Compone) {
  _inheritsLoose(ExtGridrowComponent, _Ext_grid_Row_Compone);

  function ExtGridrowComponent() {
    var _this;

    _this = _Ext_grid_Row_Compone.call(this, {}, [], []) || this;
    _this.xtype = 'gridrow';
    return _this;
  }

  return ExtGridrowComponent;
}(Ext_grid_Row_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridrow', ExtGridrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrowComponent));