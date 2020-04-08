import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import ElementParser from './common/ElementParser.js';

var EWCSpacefilling = /*#__PURE__*/function (_Ext_chart_SpaceFilli) {
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

try {
  if (window.customElements.get('ext-spacefilling') == undefined) {
    window.customElements.define('ext-spacefilling', ElementParser.withParsedCallback(EWCSpacefilling));
  }
} catch (e) {
  if (window.customElements.get('ext-spacefilling') == undefined) {
    window.customElements.define('ext-spacefilling', EWCSpacefilling);
  }
}