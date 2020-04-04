import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Media from './Ext/Media.js';
import ElementParser from './common/ElementParser.js';

var EWCMedia = /*#__PURE__*/function (_Ext_Media) {
  _inheritsLoose(EWCMedia, _Ext_Media);

  var _super = _createSuper(EWCMedia);

  function EWCMedia() {
    var _this;

    _this = _Ext_Media.call(this, [], []) || this;
    _this.xtype = 'media';
    return _this;
  }

  return EWCMedia;
}(Ext_Media);

export { EWCMedia as default };

try {
  if (window.customElements.get('ext-media') == undefined) {
    window.customElements.define('ext-media', ElementParser.withParsedCallback(EWCMedia));
  }
} catch (e) {
  if (window.customElements.get('ext-media') == undefined) {
    window.customElements.define('ext-media', EWCMedia);
  }
}