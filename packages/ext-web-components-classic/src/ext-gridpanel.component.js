import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCGridpanel extends Ext_grid_GridPanel {
  constructor() {
    super ([], []);
    this.xtype = 'gridpanel';
  }
}
window.customElements.define('ext-gridpanel', ElementParser.withParsedCallback(EWCGridpanel));
