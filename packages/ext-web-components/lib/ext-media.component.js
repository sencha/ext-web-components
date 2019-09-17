import Ext_Media_Component from './Ext/Media'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMediaComponent extends Ext_Media_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'media'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMediaComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMediaComponent))
