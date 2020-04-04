import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import ElementParser from './common/ElementParser.js';

export default class EWCListswiperitem extends Ext_dataview_listswiper_Item {
  constructor() {
    super ([], []);
    this.xtype = 'listswiperitem';
  }
}
try {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', ElementParser.withParsedCallback(EWCListswiperitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-listswiperitem') == undefined) {
    window.customElements.define('ext-listswiperitem', EWCListswiperitem);
  }
}
