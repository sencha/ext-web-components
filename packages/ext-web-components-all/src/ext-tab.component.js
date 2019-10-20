import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTab extends Ext_Tab {
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
//        window.customElements.define('ext-tab', ExtTab);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTab))
//export default reactify(ExtTab);