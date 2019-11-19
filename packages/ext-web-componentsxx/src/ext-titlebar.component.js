import Ext_TitleBar from './Ext/TitleBar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTitlebarComponent extends Ext_TitleBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'titlebar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-titlebar', ExtTitlebarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(ExtTitlebarComponent))
