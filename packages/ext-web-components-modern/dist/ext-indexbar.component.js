import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_IndexBar from './Ext/IndexBar.js';
import ElementParser from './common/ElementParser.js';

var EWCIndexbar = /*#__PURE__*/function (_Ext_IndexBar) {
  _inheritsLoose(EWCIndexbar, _Ext_IndexBar);

  var _super = _createSuper(EWCIndexbar);

  function EWCIndexbar() {
    var _this;

    _this = _Ext_IndexBar.call(this, [], []) || this;
    _this.xtype = 'indexbar';
    return _this;
  }

  return EWCIndexbar;
}(Ext_IndexBar);

export { EWCIndexbar as default };

try {
  if (window.customElements.get('ext-indexbar') == undefined) {
    window.customElements.define('ext-indexbar', ElementParser.withParsedCallback(EWCIndexbar));
  }
} catch (e) {
  if (window.customElements.get('ext-indexbar') == undefined) {
    window.customElements.define('ext-indexbar', EWCIndexbar);
  }
}