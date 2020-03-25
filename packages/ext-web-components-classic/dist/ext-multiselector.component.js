import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_view_MultiSelector from './Ext/view/MultiSelector.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMultiselector = /*#__PURE__*/function (_Ext_view_MultiSelect) {
  _inheritsLoose(EWCMultiselector, _Ext_view_MultiSelect);

  var _super = _createSuper(EWCMultiselector);

  function EWCMultiselector() {
    var _this;

    _this = _Ext_view_MultiSelect.call(this, [], []) || this;
    _this.xtype = 'multiselector';
    return _this;
  }

  return EWCMultiselector;
}(Ext_view_MultiSelector);

export { EWCMultiselector as default };

try {
  window.customElements.define('ext-multiselector', ElementParser.withParsedCallback(EWCMultiselector));
} catch (e) {
  window.customElements.define('ext-multiselector', EWCMultiselector);
}