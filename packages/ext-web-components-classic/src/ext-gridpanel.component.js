import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridpanel extends Ext_grid_GridPanel {
  constructor() {
    super ([], []);
    this.xtype = 'gridpanel';
  }
}
try {
  if (window.customElements.get('ext-gridpanel') == undefined) {
    window.customElements.define('ext-gridpanel', ElementParser.withParsedCallback(EWCGridpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridpanel') == undefined) {
    window.customElements.define('ext-gridpanel', EWCGridpanel);
  }
}
