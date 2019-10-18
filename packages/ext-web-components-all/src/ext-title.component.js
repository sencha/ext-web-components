import Ext_Title from './Ext/Title.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTitleComponent extends Ext_Title {
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
//        window.customElements.define('ext-title', ExtTitleComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(ExtTitleComponent))
