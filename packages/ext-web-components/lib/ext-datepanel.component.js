import Ext_panel_Date_Component from './Ext/panel/Date'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatepanelComponent extends Ext_panel_Date_Component {
    constructor() {
        super (
            {},
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
