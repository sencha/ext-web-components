import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtListswiperitem extends Ext_dataview_listswiper_Item {
    constructor() {
        super ([],[])
        this.xtype = 'listswiperitem';
    }
}
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(ExtListswiperitem))
