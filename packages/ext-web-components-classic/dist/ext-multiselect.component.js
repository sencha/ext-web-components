import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './common/ElementParser.js';

var EWCMultiselect = /*#__PURE__*/function (_Ext_ux_Multiselect) {
  _inheritsLoose(EWCMultiselect, _Ext_ux_Multiselect);

  var _super = _createSuper(EWCMultiselect);

  function EWCMultiselect() {
    var _this;

    _this = _Ext_ux_Multiselect.call(this, [], []) || this;
    _this.xtype = 'multiselect';
    return _this;
  }

  return EWCMultiselect;
}(Ext_ux_Multiselect);

export { EWCMultiselect as default };

try {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', ElementParser.withParsedCallback(EWCMultiselect));
  }
} catch (e) {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', EWCMultiselect);
  }
}