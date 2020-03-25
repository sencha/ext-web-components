import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSparklinebox = /*#__PURE__*/function (_Ext_sparkline_Box) {
  _inheritsLoose(EWCSparklinebox, _Ext_sparkline_Box);

  var _super = _createSuper(EWCSparklinebox);

  function EWCSparklinebox() {
    var _this;

    _this = _Ext_sparkline_Box.call(this, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return EWCSparklinebox;
}(Ext_sparkline_Box);

export { EWCSparklinebox as default };

try {
  window.customElements.define('ext-sparklinebox', ElementParser.withParsedCallback(EWCSparklinebox));
} catch (e) {
  window.customElements.define('ext-sparklinebox', EWCSparklinebox);
}