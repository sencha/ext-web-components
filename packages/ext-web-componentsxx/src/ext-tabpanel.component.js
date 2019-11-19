import Ext_TabPanel from './Ext/TabPanel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTabpanelComponent extends Ext_TabPanel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tabpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabpanel', ExtTabpanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(ExtTabpanelComponent))
