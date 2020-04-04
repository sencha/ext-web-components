import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinediscrete = /*#__PURE__*/function (_Ext_sparkline_Discre) {
  _inheritsLoose(EWCSparklinediscrete, _Ext_sparkline_Discre);

  var _super = _createSuper(EWCSparklinediscrete);

  function EWCSparklinediscrete() {
    var _this;

    _this = _Ext_sparkline_Discre.call(this, [], []) || this;
    _this.xtype = 'sparklinediscrete';
    return _this;
  }

  return EWCSparklinediscrete;
}(Ext_sparkline_Discrete);

export { EWCSparklinediscrete as default };

try {
  if (window.customElements.get('ext-sparklinediscrete') == undefined) {
    window.customElements.define('ext-sparklinediscrete', ElementParser.withParsedCallback(EWCSparklinediscrete));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinediscrete') == undefined) {
    window.customElements.define('ext-sparklinediscrete', EWCSparklinediscrete);
  }
}