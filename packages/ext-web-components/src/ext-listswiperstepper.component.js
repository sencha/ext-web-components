import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtListswiperstepperComponent extends Ext_dataview_listswiper_Stepper {
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
//        window.customElements.define('ext-listswiperstepper', ExtListswiperstepperComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listswiperstepper', HTMLParsedElement.withParsedCallback(ExtListswiperstepperComponent))
