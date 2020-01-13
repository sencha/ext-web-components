import Ext_chart_interactions_Abstract from './Ext/chart/interactions/Abstract.js';
import ElementParser from './ElementParser.js';

export default class EWCInteraction extends Ext_chart_interactions_Abstract {
  constructor() {
    super ([], []);
    this.xtype = 'interaction';
  }
}
window.customElements.define('ext-interaction', ElementParser.withParsedCallback(EWCInteraction));
