import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotconfigpanel = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigpanel, _Ext_pivot_plugin_con);

  var _super = _createSuper(EWCPivotconfigpanel);

  function EWCPivotconfigpanel() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigpanel';
    return _this;
  }

  return EWCPivotconfigpanel;
}(Ext_pivot_plugin_configurator_Panel);

export { EWCPivotconfigpanel as default };

try {
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', ElementParser.withParsedCallback(EWCPivotconfigpanel));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', EWCPivotconfigpanel);
  }
}