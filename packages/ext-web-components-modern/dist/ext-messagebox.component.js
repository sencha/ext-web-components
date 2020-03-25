import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_MessageBox from './Ext/MessageBox.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMessagebox = /*#__PURE__*/function (_Ext_MessageBox) {
  _inheritsLoose(EWCMessagebox, _Ext_MessageBox);

  var _super = _createSuper(EWCMessagebox);

  function EWCMessagebox() {
    var _this;

    _this = _Ext_MessageBox.call(this, [], []) || this;
    _this.xtype = 'messagebox';
    return _this;
  }

  return EWCMessagebox;
}(Ext_MessageBox);

export { EWCMessagebox as default };

try {
  window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));
} catch (e) {
  window.customElements.define('ext-messagebox', EWCMessagebox);
}