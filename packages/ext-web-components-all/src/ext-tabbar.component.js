import Ext_TabBar from './Ext/TabBar.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTabbarComponent extends Ext_TabBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tabbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabbar', ExtTabbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbarComponent))
