import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtListswiperstepper extends Ext_dataview_listswiper_Stepper {
    constructor() {
        super ([],[])
        this.xtype = 'listswiperstepper';
    }
}
window.customElements.define('ext-listswiperstepper', HTMLParsedElement.withParsedCallback(ExtListswiperstepper))
