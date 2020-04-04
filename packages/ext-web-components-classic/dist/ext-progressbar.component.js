import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './common/ElementParser.js';

var EWCProgressbar = /*#__PURE__*/function (_Ext_ProgressBar) {
  _inheritsLoose(EWCProgressbar, _Ext_ProgressBar);

  var _super = _createSuper(EWCProgressbar);

  function EWCProgressbar() {
    var _this;

    _this = _Ext_ProgressBar.call(this, [], []) || this;
    _this.xtype = 'progressbar';
    return _this;
  }

  return EWCProgressbar;
}(Ext_ProgressBar);

export { EWCProgressbar as default };

try {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));
  }
} catch (e) {
  if (window.customElements.get('ext-progressbar') == undefined) {
    window.customElements.define('ext-progressbar', EWCProgressbar);
  }
}