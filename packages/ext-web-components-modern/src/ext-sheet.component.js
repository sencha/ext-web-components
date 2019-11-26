//import Ext_Sheet from '@sencha/ext-runtime-base/dist/./Ext/Sheet.js';
import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSheet extends Ext_Sheet {
    constructor() {
        super ([], []);
        this.xtype = 'sheet';
    }

}
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(EWCSheet));

