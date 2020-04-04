import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import ElementParser from './common/ElementParser.js';

var EWCSparklinetristate = /*#__PURE__*/function (_Ext_sparkline_TriSta) {
  _inheritsLoose(EWCSparklinetristate, _Ext_sparkline_TriSta);

  var _super = _createSuper(EWCSparklinetristate);

  function EWCSparklinetristate() {
    var _this;

    _this = _Ext_sparkline_TriSta.call(this, [], []) || this;
    _this.xtype = 'sparklinetristate';
    return _this;
  }

  return EWCSparklinetristate;
}(Ext_sparkline_TriState);

export { EWCSparklinetristate as default };

try {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', ElementParser.withParsedCallback(EWCSparklinetristate));
  }
} catch (e) {
  if (window.customElements.get('ext-sparklinetristate') == undefined) {
    window.customElements.define('ext-sparklinetristate', EWCSparklinetristate);
  }
}