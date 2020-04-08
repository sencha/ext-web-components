import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dashboard_Panel from './Ext/dashboard/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCDashboard_panel = /*#__PURE__*/function (_Ext_dashboard_Panel) {
  _inheritsLoose(EWCDashboard_panel, _Ext_dashboard_Panel);

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