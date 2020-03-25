import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_LoadMask from './Ext/LoadMask.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLoadmask = /*#__PURE__*/function (_Ext_LoadMask) {
  _inheritsLoose(EWCLoadmask, _Ext_LoadMask);

  var _super = _createSuper(EWCLoadmask);

  function EWCLoadmask() {
    var _this;

    _this = _Ext_LoadMask.call(this, [], []) || this;
    _this.xtype = 'loadmask';
    return _this;
  }

  return EWCLoadmask;
}(Ext_LoadMask);

export { EWCLoadmask as default };

try {
  window.customElements.define('ext-loadmask', ElementParser.withParsedCallback(EWCLoadmask));
} catch (e) {
  window.customElements.define('ext-loadmask', EWCLoadmask);
}