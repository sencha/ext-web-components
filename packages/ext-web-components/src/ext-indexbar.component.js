//import Ext_IndexBar from '@sencha/ext-runtime-base/dist/./Ext/IndexBar.js';
import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCIndexbar extends Ext_IndexBar {
    constructor() {
        super ([], []);
        this.xtype = 'indexbar';
    }

}
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(EWCIndexbar));

