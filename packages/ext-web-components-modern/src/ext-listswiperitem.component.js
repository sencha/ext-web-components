//import Ext_dataview_listswiper_Item from '@sencha/ext-runtime-base/dist/./Ext/dataview/listswiper/Item.js';
import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCListswiperitem extends Ext_dataview_listswiper_Item {
    constructor() {
        super ([], []);
        this.xtype = 'listswiperitem';
    }

}
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(EWCListswiperitem));

