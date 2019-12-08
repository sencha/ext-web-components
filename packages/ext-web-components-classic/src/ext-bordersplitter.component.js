//import Ext_resizer_BorderSplitter from '@sencha/ext-runtime-base/dist/./Ext/resizer/BorderSplitter.js';
import Ext_resizer_BorderSplitter from './Ext/resizer/BorderSplitter.js';
import ElementParser from './ElementParser.js';

export default class EWCBordersplitter extends Ext_resizer_BorderSplitter {
    constructor() {
        super ([], []);
        this.xtype = 'bordersplitter';
    }

}
window.customElements.define('ext-bordersplitter', ElementParser.withParsedCallback(EWCBordersplitter));

