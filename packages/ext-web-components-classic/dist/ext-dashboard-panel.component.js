import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dashboard_Panel from './Ext/dashboard/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCDashboard_panel = /*#__PURE__*/function (_Ext_dashboard_Panel) {
  _inheritsLoose(EWCDashboard_panel, _Ext_dashboard_Panel);

  var _super = _createSuper(EWCDashboard_panel);

  function EWCDashboard_panel() {
    var _this;

    _this = _Ext_dashboard_Panel.call(this, [], []) || this;
    _this.xtype = 'dashboard-panel';
    return _this;
  }

  return EWCDashboard_panel;
}(Ext_dashboard_Panel);

export { EWCDashboard_panel as default };

try {
  if (window.customElements.get('ext-dashboard-panel') == undefined) {
    window.customElements.define('ext-dashboard-panel', ElementParser.withParsedCallback(EWCDashboard_panel));
  }
} catch (e) {
  if (window.customElements.get('ext-dashboard-panel') == undefined) {
    window.customElements.define('ext-dashboard-panel', EWCDashboard_panel);
  }
}