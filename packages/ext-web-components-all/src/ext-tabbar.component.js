import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTabbar extends Ext_TabBar {
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
//        window.customElements.define('ext-tabbar', ExtTabbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbar))
//export default reactify(ExtTabbar);