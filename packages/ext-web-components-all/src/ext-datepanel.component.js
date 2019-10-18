import Ext_panel_Date from './Ext/panel/Date.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatepanelComponent extends Ext_panel_Date {
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
//        window.customElements.define('ext-datepanel', ExtDatepanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(ExtDatepanelComponent))
