import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_chart_SpaceFillingChart from '@sencha/ext-runtime-base/dist/./Ext/chart/SpaceFillingChart.js';
import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSpacefilling =
/*#__PURE__*/
function (_Ext_chart_SpaceFilli) {
  _inheritsLoose(EWCSpacefilling, _Ext_chart_SpaceFilli);

  function EWCSpacefilling() {
    var _this;

    _this = _Ext_chart_SpaceFilli.call(this, [], []) || this;
    _this.xtype = 'spacefilling';
    return _this;
  }

  return EWCSpacefilling;
}(Ext_chart_SpaceFillingChart);

export { EWCSpacefilling as default };
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(EWCSpacefilling));