import Ext_panel_Header from './Ext/panel/Header.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPanelheaderComponent extends Ext_panel_Header {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'panelheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panelheader', ExtPanelheaderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(ExtPanelheaderComponent))
