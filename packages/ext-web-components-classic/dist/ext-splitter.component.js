import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSplitter = /*#__PURE__*/function (_Ext_resizer_Splitter) {
  _inheritsLoose(EWCSplitter, _Ext_resizer_Splitter);

  var _super = _createSuper(EWCSplitter);

  function EWCSplitter() {
    var _this;

    _this = _Ext_resizer_Splitter.call(this, [], []) || this;
    _this.xtype = 'splitter';
    return _this;
  }

  return EWCSplitter;
}(Ext_resizer_Splitter);

export { EWCSplitter as default };

try {
  window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));
} catch (e) {
  window.customElements.define('ext-splitter', EWCSplitter);
}