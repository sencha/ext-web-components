import Ext_dashboard_Panel from './Ext/dashboard/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDashboard_panel extends Ext_dashboard_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'dashboard-panel';
  }
}
try {
  if (window.customElements.get('ext-dashboard-panel') == undefined) {
    window.customElements.define('ext-dashboard-panel', ElementParser.withParsedCallback(EWCDashboard_panel));
  }
}
catch(e) {
  if (window.customElements.get('ext-dashboard-panel') == undefined) {
    window.customElements.define('ext-dashboard-panel', EWCDashboard_panel);
  }
}
