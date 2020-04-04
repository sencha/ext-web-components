import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Chip from './Ext/Chip.js';
import ElementParser from './common/ElementParser.js';

var EWCChip = /*#__PURE__*/function (_Ext_Chip) {
  _inheritsLoose(EWCChip, _Ext_Chip);

  var _super = _createSuper(EWCChip);

  function EWCChip() {
    var _this;

    _this = _Ext_Chip.call(this, [], []) || this;
    _this.xtype = 'chip';
    return _this;
  }

  return EWCChip;
}(Ext_Chip);

export { EWCChip as default };

try {
  if (window.customElements.get('ext-chip') == undefined) {
    window.customElements.define('ext-chip', ElementParser.withParsedCallback(EWCChip));
  }
} catch (e) {
  if (window.customElements.get('ext-chip') == undefined) {
    window.customElements.define('ext-chip', EWCChip);
  }
}