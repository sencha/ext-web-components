import Ext_dataview_EmptyText from './Ext/dataview/EmptyText'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtEmptytextComponent extends Ext_dataview_EmptyText {
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
//        window.customElements.define('ext-emptytext', ExtEmptytextComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(ExtEmptytextComponent))
