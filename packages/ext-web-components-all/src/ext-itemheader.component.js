import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtItemheader extends Ext_dataview_ItemHeader {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'itemheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-itemheader', ExtItemheader);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-itemheader', HTMLParsedElement.withParsedCallback(ExtItemheader))
//export default reactify(ExtItemheader);