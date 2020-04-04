import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklineline = /*#__PURE__*/function (_Ext_sparkline_Line) {
  _inheritsLoose(EWCSparklineline, _Ext_sparkline_Line);

  var _super = _createSuper(EWCSparklineline);

  function EWCSparklineline() {
    var _this;

    _this = _Ext_sparkline_Line.call(this, [], []) || this;
    _this.xtype = 'sparklineline';
    return _this;
  }

  return EWCSparklineline;
}(Ext_sparkline_Line);

export { EWCSparklineline as default };

try {
  if (window.customElements.get('ext-sparklineline') == undefined) {
    window.customElements.define('ext-sparklineline', ElementParser.withParsedCallback(EWCSparklineline));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklineline') == undefined) {
    window.customElements.define('ext-sparklineline', EWCSparklineline);
  }
}