import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_QuickTip from './Ext/QuickTip.js';
import ElementParser from './runtime/ElementParser.js';

var EWCQuicktip = /*#__PURE__*/function (_Ext_QuickTip) {
  _inheritsLoose(EWCQuicktip, _Ext_QuickTip);

  var _super = _createSuper(EWCQuicktip);

  function EWCQuicktip() {
    var _this;

    _this = _Ext_QuickTip.call(this, [], []) || this;
    _this.xtype = 'quicktip';
    return _this;
  }

  return EWCQuicktip;
}(Ext_QuickTip);

export { EWCQuicktip as default };

try {
  window.customElements.define('ext-quicktip', ElementParser.withParsedCallback(EWCQuicktip));
} catch (e) {
  window.customElements.define('ext-quicktip', EWCQuicktip);
}