import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSimplelistitem extends Ext_dataview_component_SimpleListItem {
  constructor() {
    super ([], []);
    this.xtype = 'simplelistitem';
  }
}
try {
  window.customElements.define('ext-simplelistitem', ElementParser.withParsedCallback(EWCSimplelistitem));
}
catch(e) {
  window.customElements.define('ext-simplelistitem', EWCSimplelistitem);
}
