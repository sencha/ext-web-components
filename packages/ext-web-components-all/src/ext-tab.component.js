import Ext_Tab from './Ext/Tab.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTabComponent extends Ext_Tab {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tab'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tab', ExtTabComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTabComponent))
