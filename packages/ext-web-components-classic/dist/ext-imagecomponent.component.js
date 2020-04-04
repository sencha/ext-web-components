import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Img from './Ext/Img.js';
import ElementParser from './common/ElementParser.js';

var EWCImagecomponent = /*#__PURE__*/function (_Ext_Img) {
  _inheritsLoose(EWCImagecomponent, _Ext_Img);

  var _super = _createSuper(EWCImagecomponent);

  function EWCImagecomponent() {
    var _this;

    _this = _Ext_Img.call(this, [], []) || this;
    _this.xtype = 'imagecomponent';
    return _this;
  }

  return EWCImagecomponent;
}(Ext_Img);

export { EWCImagecomponent as default };

try {
  if (window.customElements.get('ext-imagecomponent') == undefined) {
    window.customElements.define('ext-imagecomponent', ElementParser.withParsedCallback(EWCImagecomponent));
  }
} catch (e) {
  if (window.customElements.get('ext-imagecomponent') == undefined) {
    window.customElements.define('ext-imagecomponent', EWCImagecomponent);
  }
}