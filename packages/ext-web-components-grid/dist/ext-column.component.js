import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtColumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtColumnComponent, _Ext_grid_column_Temp);

  function ExtColumnComponent() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'column';
    return _this;
  }

  return ExtColumnComponent;
}(Ext_grid_column_Template); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-column', ExtColumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-column', HTMLParsedElement.withParsedCallback(ExtColumnComponent));