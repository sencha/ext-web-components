import Ext_TabBar_Component from './Ext/TabBar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTabbarComponent extends Ext_TabBar_Component {
    constructor() {
        super (
            {},
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
