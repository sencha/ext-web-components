import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotgrid =
/*#__PURE__*/
function (_Ext_pivot_Grid) {
  _inheritsLoose(ExtPivotgrid, _Ext_pivot_Grid);

  function ExtPivotgrid() {
    var _this;

    _this = _Ext_pivot_Grid.call(this, [], []) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return ExtPivotgrid;
}(Ext_pivot_Grid);

export { ExtPivotgrid as default };
window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgrid));