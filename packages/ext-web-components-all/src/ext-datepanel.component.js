import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatepanel extends Ext_panel_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datepanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepanel', ExtDatepanel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(ExtDatepanel))
//export default reactify(ExtDatepanel);