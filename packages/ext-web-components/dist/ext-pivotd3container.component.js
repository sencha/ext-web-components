import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_Container from './Ext/pivot/d3/Container';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotd3containerComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(ExtPivotd3containerComponent, _Ext_pivot_d3_Contain);

  function ExtPivotd3containerComponent() {
    var _this;

    _this = _Ext_pivot_d3_Contain.call(this, [], []) || this;
    _this.xtype = 'pivotd3container';
    return _this;
  }

  return ExtPivotd3containerComponent;
}(Ext_pivot_d3_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotd3container', ExtPivotd3containerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotd3container', HTMLParsedElement.withParsedCallback(ExtPivotd3containerComponent));