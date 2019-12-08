//import Ext_ux_ItemSelector from '@sencha/ext-runtime-base/dist/./Ext/ux/ItemSelector.js';
import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './ElementParser.js';

export default class EWCItemselector extends Ext_ux_ItemSelector {
    constructor() {
        super ([], []);
        this.xtype = 'itemselector';
    }

}
window.customElements.define('ext-itemselector', ElementParser.withParsedCallback(EWCItemselector));

