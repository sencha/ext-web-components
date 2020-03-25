import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Accordion from './Ext/panel/Accordion.js';
import ElementParser from './runtime/ElementParser.js';

var EWCAccordion = /*#__PURE__*/function (_Ext_panel_Accordion) {
  _inheritsLoose(EWCAccordion, _Ext_panel_Accordion);

  var _super = _createSuper(EWCAccordion);

  function EWCAccordion() {
    var _this;

    _this = _Ext_panel_Accordion.call(this, [], []) || this;
    _this.xtype = 'accordion';
    return _this;
  }

  return EWCAccordion;
}(Ext_panel_Accordion);

export { EWCAccordion as default };

try {
  window.customElements.define('ext-accordion', ElementParser.withParsedCallback(EWCAccordion));
} catch (e) {
  window.customElements.define('ext-accordion', EWCAccordion);
}