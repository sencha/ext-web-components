import Ext_dashboard_Panel from './Ext/dashboard/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCDashboard_panel extends Ext_dashboard_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard-panel';
  }
}
window.customElements.define('ext-dashboard-panel', ElementParser.withParsedCallback(EWCDashboard_panel));
