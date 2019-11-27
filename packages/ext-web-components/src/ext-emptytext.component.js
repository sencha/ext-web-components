//import Ext_dataview_EmptyText from '@sencha/ext-runtime-base/dist/./Ext/dataview/EmptyText.js';
import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCEmptytext extends Ext_dataview_EmptyText {
    constructor() {
        super ([], []);
        this.xtype = 'emptytext';
    }

}
window.customElements.define('ext-emptytext', HTMLParsedElement.withParsedCallback(EWCEmptytext));

