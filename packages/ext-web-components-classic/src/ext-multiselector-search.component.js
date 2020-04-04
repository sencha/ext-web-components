import Ext_view_MultiSelectorSearch from './Ext/view/MultiSelectorSearch.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMultiselector_search extends Ext_view_MultiSelectorSearch {
  constructor() {
    super ([], []);
    this.xtype = 'multiselector-search';
  }
}
try {
  if (window.customElements.get('ext-multiselector-search') == undefined) {
    window.customElements.define('ext-multiselector-search', ElementParser.withParsedCallback(EWCMultiselector_search));
  }
}
catch(e) {
  if (window.customElements.get('ext-multiselector-search') == undefined) {
    window.customElements.define('ext-multiselector-search', EWCMultiselector_search);
  }
}
