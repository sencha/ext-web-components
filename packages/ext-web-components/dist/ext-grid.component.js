import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid_Component from './Ext/grid/Grid';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridComponent =
/*#__PURE__*/
function (_Ext_grid_Grid_Compon) {
  _inheritsLoose(ExtGridComponent, _Ext_grid_Grid_Compon);

  function ExtGridComponent() {
    var _this;

    _this = _Ext_grid_Grid_Compon.call(this, {}, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return ExtGridComponent;
}(Ext_grid_Grid_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-grid', ExtGridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(ExtGridComponent));