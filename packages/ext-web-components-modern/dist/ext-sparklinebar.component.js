import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Bar from './Ext/sparkline/Bar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSparklinebar = /*#__PURE__*/function (_Ext_sparkline_Bar) {
  _inheritsLoose(EWCSparklinebar, _Ext_sparkline_Bar);

  var _super = _createSuper(EWCSparklinebar);

  function EWCSparklinebar() {
    var _this;

    _this = _Ext_sparkline_Bar.call(this, [], []) || this;
    _this.xtype = 'sparklinebar';
    return _this;
  }

  return EWCSparklinebar;
}(Ext_sparkline_Bar);

export { EWCSparklinebar as default };

try {
  window.customElements.define('ext-sparklinebar', ElementParser.withParsedCallback(EWCSparklinebar));
} catch (e) {
  window.customElements.define('ext-sparklinebar', EWCSparklinebar);
}