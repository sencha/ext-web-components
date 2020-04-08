import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCListitem extends Ext_dataview_component_ListItem {
  constructor() {
    super ([], []);
    this.xtype = 'listitem';
  }
}
try {
  if (window.customElements.get('ext-listitem') == undefined) {
    window.customElements.define('ext-listitem', ElementParser.withParsedCallback(EWCListitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-listitem') == undefined) {
    window.customElements.define('ext-listitem', EWCListitem);
  }
}
