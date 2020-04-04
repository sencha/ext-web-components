import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dashboard_Dashboard from './Ext/dashboard/Dashboard.js';
import ElementParser from './common/ElementParser.js';

var EWCDashboard = /*#__PURE__*/function (_Ext_dashboard_Dashbo) {
  _inheritsLoose(EWCDashboard, _Ext_dashboard_Dashbo);

  var _super = _createSuper(EWCDashboard);

  function EWCDashboard() {
    var _this;

    _this = _Ext_dashboard_Dashbo.call(this, [], []) || this;
    _this.xtype = 'dashboard';
    return _this;
  }

  return EWCDashboard;
}(Ext_dashboard_Dashboard);

export { EWCDashboard as default };

try {
  if (window.customElements.get('ext-dashboard') == undefined) {
    window.customElements.define('ext-dashboard', ElementParser.withParsedCallback(EWCDashboard));
  }
} catch (e) {
  if (window.customElements.get('ext-dashboard') == undefined) {
    window.customElements.define('ext-dashboard', EWCDashboard);
  }
}