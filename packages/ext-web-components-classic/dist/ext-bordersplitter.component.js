import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_resizer_BorderSplitter from './Ext/resizer/BorderSplitter.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBordersplitter = /*#__PURE__*/function (_Ext_resizer_BorderSp) {
  _inheritsLoose(EWCBordersplitter, _Ext_resizer_BorderSp);

  var _super = _createSuper(EWCBordersplitter);

  function EWCBordersplitter() {
    var _this;

    _this = _Ext_resizer_BorderSp.call(this, [], []) || this;
    _this.xtype = 'bordersplitter';
    return _this;
  }

  return EWCBordersplitter;
}(Ext_resizer_BorderSplitter);

export { EWCBordersplitter as default };

try {
  window.customElements.define('ext-bordersplitter', ElementParser.withParsedCallback(EWCBordersplitter));
} catch (e) {
  window.customElements.define('ext-bordersplitter', EWCBordersplitter);
}