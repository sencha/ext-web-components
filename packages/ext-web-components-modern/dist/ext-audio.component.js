import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Audio from './Ext/Audio.js';
import ElementParser from './runtime/ElementParser.js';

var EWCAudio = /*#__PURE__*/function (_Ext_Audio) {
  _inheritsLoose(EWCAudio, _Ext_Audio);

  var _super = _createSuper(EWCAudio);

  function EWCAudio() {
    var _this;

    _this = _Ext_Audio.call(this, [], []) || this;
    _this.xtype = 'audio';
    return _this;
  }

  return EWCAudio;
}(Ext_Audio);

export { EWCAudio as default };

try {
  window.customElements.define('ext-audio', ElementParser.withParsedCallback(EWCAudio));
} catch (e) {
  window.customElements.define('ext-audio', EWCAudio);
}