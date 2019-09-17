import Ext_panel_DateTitle_Component from './Ext/panel/DateTitle'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatetitleComponent extends Ext_panel_DateTitle_Component {
    constructor() {
        super ()
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
