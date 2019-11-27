//import Ext_DataView from '@sencha/ext-runtime-base/dist/./Ext/DataView.js';
import Ext_DataView from './Ext/DataView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDataview extends Ext_DataView {
    constructor() {
        super ([], []);
        this.xtype = 'dataview';
    }

}
window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(EWCDataview));

