//import Ext_resizer_Splitter from '@sencha/ext-runtime-base/dist/./Ext/resizer/Splitter.js';
import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './ElementParser.js';

export default class EWCSplitter extends Ext_resizer_Splitter {
    constructor() {
        super ([], []);
        this.xtype = 'splitter';
    }

}
window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));

