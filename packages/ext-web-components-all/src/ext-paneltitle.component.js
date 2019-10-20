import Ext_panel_Title from './Ext/panel/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPaneltitle extends Ext_panel_Title {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'paneltitle'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-paneltitle', ExtPaneltitle);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(ExtPaneltitle))
//export default reactify(ExtPaneltitle);