import Ext_dashboard_Panel from './Ext/dashboard/Panel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDashboard_panel extends Ext_dashboard_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard-panel';
  }
}
try {
  window.customElements.define('ext-dashboard-panel', ElementParser.withParsedCallback(EWCDashboard_panel));
}
catch(e) {
  window.customElements.define('ext-dashboard-panel', EWCDashboard_panel);
}
