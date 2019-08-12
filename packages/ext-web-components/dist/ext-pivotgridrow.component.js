import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Row_Component from './Ext/pivot/Row';
export var ExtPivotgridrowComponent =
/*#__PURE__*/
function (_Ext_pivot_Row_Compon) {
  _inheritsLoose(ExtPivotgridrowComponent, _Ext_pivot_Row_Compon);

  function ExtPivotgridrowComponent() {
    return _Ext_pivot_Row_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtPivotgridrowComponent;
}(Ext_pivot_Row_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotgridrow', ExtPivotgridrowComponent);
  });
})();