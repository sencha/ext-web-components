//import Ext_toolbar_Fill from '@sencha/ext-runtime-base/dist/./Ext/toolbar/Fill.js';
import Ext_toolbar_Fill from './Ext/toolbar/Fill.js';
import ElementParser from './ElementParser.js';

export default class EWCTbfill extends Ext_toolbar_Fill {
    constructor() {
        super ([], []);
        this.xtype = 'tbfill';
    }

}
window.customElements.define('ext-tbfill', ElementParser.withParsedCallback(EWCTbfill));

