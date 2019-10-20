import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtListswiperstepper extends Ext_dataview_listswiper_Stepper {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'listswiperstepper'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listswiperstepper', ExtListswiperstepper);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listswiperstepper', HTMLParsedElement.withParsedCallback(ExtListswiperstepper))
//export default reactify(ExtListswiperstepper);