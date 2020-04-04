import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import ElementParser from './common/ElementParser.js';

export default class EWCListswiperstepper extends Ext_dataview_listswiper_Stepper {
  constructor() {
    super ([], []);
    this.xtype = 'listswiperstepper';
  }
}
try {
  if (window.customElements.get('ext-listswiperstepper') == undefined) {
    window.customElements.define('ext-listswiperstepper', ElementParser.withParsedCallback(EWCListswiperstepper));
  }
}
catch(e) {
  if (window.customElements.get('ext-listswiperstepper') == undefined) {
    window.customElements.define('ext-listswiperstepper', EWCListswiperstepper);
  }
}
