import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCListitem extends Ext_dataview_component_ListItem {
  constructor() {
    super ([], []);
    this.xtype = 'listitem';
  }
}
try {
  window.customElements.define('ext-listitem', ElementParser.withParsedCallback(EWCListitem));
}
catch(e) {
  window.customElements.define('ext-listitem', EWCListitem);
}
