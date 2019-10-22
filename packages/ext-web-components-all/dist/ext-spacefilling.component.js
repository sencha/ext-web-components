import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSpacefilling =
/*#__PURE__*/
function (_Ext_chart_SpaceFilli) {
  _inheritsLoose(ExtSpacefilling, _Ext_chart_SpaceFilli);

  function ExtSpacefilling() {
    var _this;

    _this = _Ext_chart_SpaceFilli.call(this, [], []) || this;
    _this.xtype = 'spacefilling';
    return _this;
  }

  return ExtSpacefilling;
}(Ext_chart_SpaceFillingChart);

export { ExtSpacefilling as default };
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(ExtSpacefilling));