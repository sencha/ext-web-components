import Ext_Title_Component from './Ext/Title'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTitleComponent extends Ext_Title_Component {
    constructor() {
        super (
            {},
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
