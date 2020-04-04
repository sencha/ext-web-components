import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Display from './Ext/form/Display.js';
import ElementParser from './common/ElementParser.js';

var EWCDisplayfield = /*#__PURE__*/function (_Ext_form_Display) {
  _inheritsLoose(EWCDisplayfield, _Ext_form_Display);

  var _super = _createSuper(EWCDisplayfield);

  function EWCDisplayfield() {
    var _this;

    _this = _Ext_form_Display.call(this, [], []) || this;
    _this.xtype = 'displayfield';
    return _this;
  }

  return EWCDisplayfield;
}(Ext_form_Display);

export { EWCDisplayfield as default };

try {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', ElementParser.withParsedCallback(EWCDisplayfield));
  }
} catch (e) {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', EWCDisplayfield);
  }
}