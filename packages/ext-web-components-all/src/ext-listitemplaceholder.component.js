import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
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
//        window.customElements.define('ext-listitemplaceholder', ExtListitemplaceholder);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(ExtListitemplaceholder))
//export default reactify(ExtListitemplaceholder);