import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import ElementParser from './common/ElementParser.js';

var EWCSpacefilling = /*#__PURE__*/function (_Ext_chart_SpaceFilli) {
  _inheritsLoose(EWCSpacefilling, _Ext_chart_SpaceFilli);

  var _super = _createSuper(EWCSpacefilling);

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