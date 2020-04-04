import Ext_chart_interactions_Abstract from './Ext/chart/interactions/Abstract.js';
import ElementParser from './common/ElementParser.js';

export default class EWCInteraction extends Ext_chart_interactions_Abstract {
  constructor() {
    super ([], []);
    this.xtype = 'interaction';
  }
}
try {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', ElementParser.withParsedCallback(EWCInteraction));
  }
}
catch(e) {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', EWCInteraction);
  }
}
