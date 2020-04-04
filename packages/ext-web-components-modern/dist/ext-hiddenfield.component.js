import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './common/ElementParser.js';

var EWCHiddenfield = /*#__PURE__*/function (_Ext_form_Hidden) {
  _inheritsLoose(EWCHiddenfield, _Ext_form_Hidden);

  var _super = _createSuper(EWCHiddenfield);

  function EWCHiddenfield() {
    var _this;

    _this = _Ext_form_Hidden.call(this, [], []) || this;
    _this.xtype = 'hiddenfield';
    return _this;
  }

  return EWCHiddenfield;
}(Ext_form_Hidden);

export { EWCHiddenfield as default };

try {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', ElementParser.withParsedCallback(EWCHiddenfield));
  }
} catch (e) {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', EWCHiddenfield);
  }
}