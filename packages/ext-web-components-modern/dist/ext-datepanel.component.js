import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Date from './Ext/panel/Date.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatepanel = /*#__PURE__*/function (_Ext_panel_Date) {
  _inheritsLoose(EWCDatepanel, _Ext_panel_Date);

  var _super = _createSuper(EWCDatepanel);

  function EWCDatepanel() {
    var _this;

    _this = _Ext_panel_Date.call(this, [], []) || this;
    _this.xtype = 'datepanel';
    return _this;
  }

  return EWCDatepanel;
}(Ext_panel_Date);

export { EWCDatepanel as default };

try {
  window.customElements.define('ext-datepanel', ElementParser.withParsedCallback(EWCDatepanel));
} catch (e) {
  window.customElements.define('ext-datepanel', EWCDatepanel);
}