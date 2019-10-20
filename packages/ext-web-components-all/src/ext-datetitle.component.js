import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatetitle extends Ext_panel_DateTitle {
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
//        window.customElements.define('ext-datetitle', ExtDatetitle);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(ExtDatetitle))
//export default reactify(ExtDatetitle);