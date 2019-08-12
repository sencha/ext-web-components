import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_Container_Component from './Ext/pivot/d3/Container';
export var ExtPivotd3containerComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(ExtPivotd3containerComponent, _Ext_pivot_d3_Contain);

  function ExtPivotd3containerComponent() {
    return _Ext_pivot_d3_Contain.call(this, '', '', {}, '') || this;
  }

  return ExtPivotd3containerComponent;
}(Ext_pivot_d3_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotd3container', ExtPivotd3containerComponent);
  });
})();