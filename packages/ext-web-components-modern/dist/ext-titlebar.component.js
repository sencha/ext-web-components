import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_TitleBar from './Ext/TitleBar.js';
import ElementParser from './common/ElementParser.js';

var EWCTitlebar = /*#__PURE__*/function (_Ext_TitleBar) {
  _inheritsLoose(EWCTitlebar, _Ext_TitleBar);

  var _super = _createSuper(EWCTitlebar);

  function EWCTitlebar() {
    var _this;

    _this = _Ext_TitleBar.call(this, [], []) || this;
    _this.xtype = 'titlebar';
    return _this;
  }

  return EWCTitlebar;
}(Ext_TitleBar);

export { EWCTitlebar as default };

try {
  if (window.customElements.get('ext-titlebar') == undefined) {
    window.customElements.define('ext-titlebar', ElementParser.withParsedCallback(EWCTitlebar));
  }
} catch (e) {
  if (window.customElements.get('ext-titlebar') == undefined) {
    window.customElements.define('ext-titlebar', EWCTitlebar);
  }
}