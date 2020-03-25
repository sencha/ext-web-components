import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_TabPanel from './Ext/TabPanel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTabpanel = /*#__PURE__*/function (_Ext_TabPanel) {
  _inheritsLoose(EWCTabpanel, _Ext_TabPanel);

  var _super = _createSuper(EWCTabpanel);

  function EWCTabpanel() {
    var _this;

    _this = _Ext_TabPanel.call(this, [], []) || this;
    _this.xtype = 'tabpanel';
    return _this;
  }

  return EWCTabpanel;
}(Ext_TabPanel);

export { EWCTabpanel as default };

try {
  window.customElements.define('ext-tabpanel', ElementParser.withParsedCallback(EWCTabpanel));
} catch (e) {
  window.customElements.define('ext-tabpanel', EWCTabpanel);
}