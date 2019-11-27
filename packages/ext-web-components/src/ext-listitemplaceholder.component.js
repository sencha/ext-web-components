//import Ext_dataview_ListItemPlaceholder from '@sencha/ext-runtime-base/dist/./Ext/dataview/ListItemPlaceholder.js';
import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCListitemplaceholder extends Ext_dataview_ListItemPlaceholder {
    constructor() {
        super ([], []);
        this.xtype = 'listitemplaceholder';
    }

}
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(EWCListitemplaceholder));

