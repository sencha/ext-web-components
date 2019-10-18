import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid from './Ext/grid/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGridComponent =
/*#__PURE__*/
function (_Ext_grid_Grid) {
  _inheritsLoose(ExtGridComponent, _Ext_grid_Grid);

  function ExtGridComponent() {
    var _this;

    _this = _Ext_grid_Grid.call(this, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return ExtGridComponent;
}(Ext_grid_Grid); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-grid', ExtGridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(ExtGridComponent));