import Ext_TabPanel_Component from './Ext/TabPanel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTabpanelComponent extends Ext_TabPanel_Component {
    constructor() {
        super (
            {},
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
