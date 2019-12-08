import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_dashboard_Column from '@sencha/ext-runtime-base/dist/./Ext/dashboard/Column.js';
import Ext_dashboard_Column from './Ext/dashboard/Column.js';
import ElementParser from './ElementParser.js';

var EWCDashboard_column =
/*#__PURE__*/
function (_Ext_dashboard_Column) {
  _inheritsLoose(EWCDashboard_column, _Ext_dashboard_Column);

  function EWCDashboard_column() {
    var _this;

    _this = _Ext_dashboard_Column.call(this, [], []) || this;
    _this.xtype = 'dashboard-column';
    return _this;
  }

  return EWCDashboard_column;
}(Ext_dashboard_Column);

export { EWCDashboard_column as default };
window.customElements.define('ext-dashboard-column', ElementParser.withParsedCallback(EWCDashboard_column));