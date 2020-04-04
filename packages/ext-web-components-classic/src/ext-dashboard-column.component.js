import Ext_dashboard_Column from './Ext/dashboard/Column.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDashboard_column extends Ext_dashboard_Column {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard-column';
  }
}
try {
  if (window.customElements.get('ext-dashboard-column') == undefined) {
    window.customElements.define('ext-dashboard-column', ElementParser.withParsedCallback(EWCDashboard_column));
  }
}
catch(e) {
  if (window.customElements.get('ext-dashboard-column') == undefined) {
    window.customElements.define('ext-dashboard-column', EWCDashboard_column);
  }
}
