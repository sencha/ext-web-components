import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import ElementParser from './common/ElementParser.js';

export default class EWCListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
  constructor() {
    super ([], []);
    this.xtype = 'listitemplaceholder';
  }
}
try {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', ElementParser.withParsedCallback(EWCListitemplaceholder));
  }
}
catch(e) {
  if (window.customElements.get('ext-listitemplaceholder') == undefined) {
    window.customElements.define('ext-listitemplaceholder', EWCListitemplaceholder);
  }
}
