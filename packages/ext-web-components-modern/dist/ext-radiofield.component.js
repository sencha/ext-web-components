import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './common/ElementParser.js';

var EWCRadiofield = /*#__PURE__*/function (_Ext_form_Radio) {
  _inheritsLoose(EWCRadiofield, _Ext_form_Radio);

  var _super = _createSuper(EWCRadiofield);

  function EWCRadiofield() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radiofield';
    return _this;
  }

  return EWCRadiofield;
}(Ext_form_Radio);

export { EWCRadiofield as default };

try {
  if (window.customElements.get('ext-radiofield') == undefined) {
    window.customElements.define('ext-radiofield', ElementParser.withParsedCallback(EWCRadiofield));
  }
} catch (e) {
  if (window.customElements.get('ext-radiofield') == undefined) {
    window.customElements.define('ext-radiofield', EWCRadiofield);
  }
}