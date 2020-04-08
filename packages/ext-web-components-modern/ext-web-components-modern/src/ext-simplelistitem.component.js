import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSimplelistitem extends Ext_dataview_component_SimpleListItem {
  constructor() {
    super ([], []);
    this.xtype = 'simplelistitem';
  }
}
try {
  if (window.customElements.get('ext-simplelistitem') == undefined) {
    window.customElements.define('ext-simplelistitem', ElementParser.withParsedCallback(EWCSimplelistitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-simplelistitem') == undefined) {
    window.customElements.define('ext-simplelistitem', EWCSimplelistitem);
  }
}
