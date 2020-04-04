import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './common/ElementParser.js';

var EWCDatetrigger = /*#__PURE__*/function (_Ext_field_trigger_Da) {
  _inheritsLoose(EWCDatetrigger, _Ext_field_trigger_Da);

  var _super = _createSuper(EWCDatetrigger);

  function EWCDatetrigger() {
    var _this;

    _this = _Ext_field_trigger_Da.call(this, [], []) || this;
    _this.xtype = 'datetrigger';
    return _this;
  }

  return EWCDatetrigger;
}(Ext_field_trigger_Date);

export { EWCDatetrigger as default };

try {
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', EWCDatetrigger);
  }
}