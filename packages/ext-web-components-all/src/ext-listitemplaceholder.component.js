import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
    constructor() {
        super ([],[])
        this.xtype = 'listitemplaceholder';
    }
}
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(ExtListitemplaceholder))
