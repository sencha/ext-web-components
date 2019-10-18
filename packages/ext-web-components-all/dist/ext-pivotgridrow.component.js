import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotgridrowComponent =
/*#__PURE__*/
function (_Ext_pivot_Row) {
  _inheritsLoose(ExtPivotgridrowComponent, _Ext_pivot_Row);

  function ExtPivotgridrowComponent() {
    var _this;

    _this = _Ext_pivot_Row.call(this, [], []) || this;
    _this.xtype = 'pivotgridrow';
    return _this;
  }

  return ExtPivotgridrowComponent;
}(Ext_pivot_Row); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridrow', ExtPivotgridrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrowComponent));