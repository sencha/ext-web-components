import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtListitemplaceholderComponent extends Ext_dataview_ListItemPlaceholder {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'listitemplaceholder'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listitemplaceholder', ExtListitemplaceholderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(ExtListitemplaceholderComponent))
