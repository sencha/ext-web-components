import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGridrowComponent =
/*#__PURE__*/
function (_Ext_grid_Row) {
  _inheritsLoose(ExtGridrowComponent, _Ext_grid_Row);

  function ExtGridrowComponent() {
    var _this;

    _this = _Ext_grid_Row.call(this, [], []) || this;
    _this.xtype = 'gridrow';
    return _this;
  }

  return ExtGridrowComponent;
}(Ext_grid_Row); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridrow', ExtGridrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrowComponent));