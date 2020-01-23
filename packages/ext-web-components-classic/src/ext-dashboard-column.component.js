import Ext_dashboard_Column from './Ext/dashboard/Column.js';
import ElementParser from './ElementParser.js';

export default class EWCDashboard_column extends Ext_dashboard_Column {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard-column';
  }
}
try {
  window.customElements.define('ext-dashboard-column', ElementParser.withParsedCallback(EWCDashboard_column));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-dashboard-column', EWCDashboard_column);
}
