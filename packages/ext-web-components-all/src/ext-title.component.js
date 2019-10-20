import Ext_Title from './Ext/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTitle extends Ext_Title {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'title'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-title', ExtTitle);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitle))
//export default reactify(ExtTitle);