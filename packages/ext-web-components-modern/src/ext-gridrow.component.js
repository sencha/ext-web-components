import Ext_grid_Row from './Ext/grid/Row.js';
import ElementParser from './ElementParser.js';

export default class EWCGridrow extends Ext_grid_Row {
  constructor() {
    super ([], []);
    this.xtype = 'gridrow';
  }
}
window.customElements.define('ext-gridrow', ElementParser.withParsedCallback(EWCGridrow));
