import Ext_dataview_ItemHeader_Component from './Ext/dataview/ItemHeader'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtItemheaderComponent extends Ext_dataview_ItemHeader_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'itemheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-itemheader', ExtItemheaderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-itemheader', HTMLParsedElement.withParsedCallback(ExtItemheaderComponent))
