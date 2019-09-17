import Ext_panel_Header_Component from './Ext/panel/Header'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPanelheaderComponent extends Ext_panel_Header_Component {
    constructor() {
        super ()
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
