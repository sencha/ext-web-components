import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import ElementParser from './ElementParser.js';

export default class EWCListitem extends Ext_dataview_component_ListItem {
  constructor() {
    super ([], []);
    this.xtype = 'listitem';
  }
}
window.customElements.define('ext-listitem', ElementParser.withParsedCallback(EWCListitem));
