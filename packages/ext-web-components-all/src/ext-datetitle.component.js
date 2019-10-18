import Ext_panel_DateTitle from './Ext/panel/DateTitle.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatetitleComponent extends Ext_panel_DateTitle {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datetitle'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetitle', ExtDatetitleComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(ExtDatetitleComponent))
