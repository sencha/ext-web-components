import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgrid = /*#__PURE__*/function (_Ext_pivot_Grid) {
  _inheritsLoose(EWCPivotgrid, _Ext_pivot_Grid);

  function EWCPivotgrid() {
    var _this;

    _this = _Ext_pivot_Grid.call(this, [], []) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return EWCPivotgrid;
}(Ext_pivot_Grid);

export { EWCPivotgrid as default };

try {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', EWCPivotgrid);
  }
}