//import Ext_dataview_ItemHeader from '@sencha/ext-runtime-base/dist/./Ext/dataview/ItemHeader.js';
import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCItemheader extends Ext_dataview_ItemHeader {
    constructor() {
        super ([], []);
        this.xtype = 'itemheader';
    }

}
window.customElements.define('ext-itemheader', HTMLParsedElement.withParsedCallback(EWCItemheader));

