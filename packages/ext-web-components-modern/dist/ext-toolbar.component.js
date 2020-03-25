import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Toolbar from './Ext/Toolbar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCToolbar = /*#__PURE__*/function (_Ext_Toolbar) {
  _inheritsLoose(EWCToolbar, _Ext_Toolbar);

  var _super = _createSuper(EWCToolbar);

  function EWCToolbar() {
    var _this;

    _this = _Ext_Toolbar.call(this, [], []) || this;
    _this.xtype = 'toolbar';
    return _this;
  }

  return EWCToolbar;
}(Ext_Toolbar);

export { EWCToolbar as default };

try {
  window.customElements.define('ext-toolbar', ElementParser.withParsedCallback(EWCToolbar));
} catch (e) {
  window.customElements.define('ext-toolbar', EWCToolbar);
}