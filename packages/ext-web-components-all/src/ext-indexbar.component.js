import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtIndexbar extends Ext_IndexBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'indexbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indexbar', ExtIndexbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbar))
//export default reactify(ExtIndexbar);