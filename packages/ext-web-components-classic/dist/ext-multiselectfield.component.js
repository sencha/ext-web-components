import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './common/ElementParser.js';

var EWCMultiselectfield = /*#__PURE__*/function (_Ext_ux_Multiselect) {
  _inheritsLoose(EWCMultiselectfield, _Ext_ux_Multiselect);

  var _super = _createSuper(EWCMultiselectfield);

  function EWCMultiselectfield() {
    var _this;

    _this = _Ext_ux_Multiselect.call(this, [], []) || this;
    _this.xtype = 'multiselectfield';
    return _this;
  }

  return EWCMultiselectfield;
}(Ext_ux_Multiselect);

export { EWCMultiselectfield as default };

try {
  if (window.customElements.get('ext-multiselectfield') == undefined) {
    window.customElements.define('ext-multiselectfield', ElementParser.withParsedCallback(EWCMultiselectfield));
  }
} catch (e) {
  if (window.customElements.get('ext-multiselectfield') == undefined) {
    window.customElements.define('ext-multiselectfield', EWCMultiselectfield);
  }
}