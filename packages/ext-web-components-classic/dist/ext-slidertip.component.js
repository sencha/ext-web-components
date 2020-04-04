import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_Tip from './Ext/slider/Tip.js';
import ElementParser from './common/ElementParser.js';

var EWCSlidertip = /*#__PURE__*/function (_Ext_slider_Tip) {
  _inheritsLoose(EWCSlidertip, _Ext_slider_Tip);

  var _super = _createSuper(EWCSlidertip);

  function EWCSlidertip() {
    var _this;

    _this = _Ext_slider_Tip.call(this, [], []) || this;
    _this.xtype = 'slidertip';
    return _this;
  }

  return EWCSlidertip;
}(Ext_slider_Tip);

export { EWCSlidertip as default };

try {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', ElementParser.withParsedCallback(EWCSlidertip));
  }
} catch (e) {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', EWCSlidertip);
  }
}