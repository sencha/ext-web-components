import Ext_chart_interactions_Abstract from './Ext/chart/interactions/Abstract.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCInteraction extends Ext_chart_interactions_Abstract {
  constructor() {
    super ([], []);
    this.xtype = 'interaction';
  }
}
try {
  window.customElements.define('ext-interaction', ElementParser.withParsedCallback(EWCInteraction));
}
catch(e) {
  window.customElements.define('ext-interaction', EWCInteraction);
}
