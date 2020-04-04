import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_RadioGroup from './Ext/form/RadioGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCRadiogroup = /*#__PURE__*/function (_Ext_form_RadioGroup) {
  _inheritsLoose(EWCRadiogroup, _Ext_form_RadioGroup);

  var _super = _createSuper(EWCRadiogroup);

  function EWCRadiogroup() {
    var _this;

    _this = _Ext_form_RadioGroup.call(this, [], []) || this;
    _this.xtype = 'radiogroup';
    return _this;
  }

  return EWCRadiogroup;
}(Ext_form_RadioGroup);

export { EWCRadiogroup as default };

try {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
  }
} catch (e) {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', EWCRadiogroup);
  }
}