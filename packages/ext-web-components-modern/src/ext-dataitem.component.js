import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDataitem extends Ext_dataview_component_DataItem {
  constructor() {
    super ([], []);
    this.xtype = 'dataitem';
  }
}
try {
  if (window.customElements.get('ext-dataitem') == undefined) {
    window.customElements.define('ext-dataitem', ElementParser.withParsedCallback(EWCDataitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-dataitem') == undefined) {
    window.customElements.define('ext-dataitem', EWCDataitem);
  }
}
