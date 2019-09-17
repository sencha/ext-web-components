import Ext_Tab_Component from './Ext/Tab'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTabComponent extends Ext_Tab_Component {
    constructor() {
        super (
            {},
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
