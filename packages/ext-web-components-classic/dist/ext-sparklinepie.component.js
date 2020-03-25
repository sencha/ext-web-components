import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSparklinepie = /*#__PURE__*/function (_Ext_sparkline_Pie) {
  _inheritsLoose(EWCSparklinepie, _Ext_sparkline_Pie);

  var _super = _createSuper(EWCSparklinepie);

  function EWCSparklinepie() {
    var _this;

    _this = _Ext_sparkline_Pie.call(this, [], []) || this;
    _this.xtype = 'sparklinepie';
    return _this;
  }

  return EWCSparklinepie;
}(Ext_sparkline_Pie);

export { EWCSparklinepie as default };

try {
  window.customElements.define('ext-sparklinepie', ElementParser.withParsedCallback(EWCSparklinepie));
} catch (e) {
  window.customElements.define('ext-sparklinepie', EWCSparklinepie);
}