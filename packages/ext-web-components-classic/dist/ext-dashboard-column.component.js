import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dashboard_Column from './Ext/dashboard/Column.js';
import ElementParser from './common/ElementParser.js';

var EWCDashboard_column = /*#__PURE__*/function (_Ext_dashboard_Column) {
  _inheritsLoose(EWCDashboard_column, _Ext_dashboard_Column);

  var _super = _createSuper(EWCDashboard_column);

  function EWCDashboard_column() {
    var _this;

    _this = _Ext_dashboard_Column.call(this, [], []) || this;
    _this.xtype = 'dashboard-column';
    return _this;
  }

  return EWCDashboard_column;
}(Ext_dashboard_Column);

export { EWCDashboard_column as default };

try {
  if (window.customElements.get('ext-dashboard-column') == undefined) {
    window.customElements.define('ext-dashboard-column', ElementParser.withParsedCallback(EWCDashboard_column));
  }
} catch (e) {
  if (window.customElements.get('ext-dashboard-column') == undefined) {
    window.customElements.define('ext-dashboard-column', EWCDashboard_column);
  }
}