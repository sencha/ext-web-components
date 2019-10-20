import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtEmptytext extends Ext_dataview_EmptyText {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'emptytext'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-emptytext', ExtEmptytext);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(ExtEmptytext))
//export default reactify(ExtEmptytext);