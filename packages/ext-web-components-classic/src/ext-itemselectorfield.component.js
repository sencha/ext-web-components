//import Ext_ux_ItemSelector from '@sencha/ext-runtime-base/dist/./Ext/ux/ItemSelector.js';
import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './ElementParser.js';

export default class EWCItemselectorfield extends Ext_ux_ItemSelector {
    constructor() {
        super ([], []);
        this.xtype = 'itemselectorfield';
    }

}
window.customElements.define('ext-itemselectorfield', ElementParser.withParsedCallback(EWCItemselectorfield));

