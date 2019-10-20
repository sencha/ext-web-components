import Ext_panel_Header from './Ext/panel/Header.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPanelheader extends Ext_panel_Header {
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
//        window.customElements.define('ext-panelheader', ExtPanelheader);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(ExtPanelheader))
//export default reactify(ExtPanelheader);