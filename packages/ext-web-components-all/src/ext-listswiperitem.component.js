import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtListswiperitem extends Ext_dataview_listswiper_Item {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'listswiperitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listswiperitem', ExtListswiperitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listswiperitem', HTMLParsedElement.withParsedCallback(ExtListswiperitem))
//export default reactify(ExtListswiperitem);