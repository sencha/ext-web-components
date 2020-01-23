import Ext_dashboard_Dashboard from './Ext/dashboard/Dashboard.js';
import ElementParser from './ElementParser.js';

export default class EWCDashboard extends Ext_dashboard_Dashboard {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard';
  }
}
try {
  window.customElements.define('ext-dashboard', ElementParser.withParsedCallback(EWCDashboard));
}
catch(e) {
  window.customElements.define('ext-dashboard', EWCDashboard);
}
