import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_FieldContainer from './Ext/form/FieldContainer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFieldcontainer = /*#__PURE__*/function (_Ext_form_FieldContai) {
  _inheritsLoose(EWCFieldcontainer, _Ext_form_FieldContai);

  var _super = _createSuper(EWCFieldcontainer);

  function EWCFieldcontainer() {
    var _this;

    _this = _Ext_form_FieldContai.call(this, [], []) || this;
    _this.xtype = 'fieldcontainer';
    return _this;
  }

  return EWCFieldcontainer;
}(Ext_form_FieldContainer);

export { EWCFieldcontainer as default };

try {
  window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
} catch (e) {
  window.customElements.define('ext-fieldcontainer', EWCFieldcontainer);
}