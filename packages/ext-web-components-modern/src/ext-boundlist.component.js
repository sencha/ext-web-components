//import Ext_dataview_BoundList from '@sencha/ext-runtime-base/dist/./Ext/dataview/BoundList.js';
import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCBoundlist extends Ext_dataview_BoundList {
    constructor() {
        super ([], []);
        this.xtype = 'boundlist';
    }

}
window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(EWCBoundlist));

