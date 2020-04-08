import Ext_dashboard_Dashboard from './Ext/dashboard/Dashboard.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDashboard extends Ext_dashboard_Dashboard {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard';
  }
}
try {
  if (window.customElements.get('ext-dashboard') == undefined) {
    window.customElements.define('ext-dashboard', ElementParser.withParsedCallback(EWCDashboard));
  }
}
catch(e) {
  if (window.customElements.get('ext-dashboard') == undefined) {
    window.customElements.define('ext-dashboard', EWCDashboard);
  }
}
