//import Ext_view_MultiSelectorSearch from '@sencha/ext-runtime-base/dist/./Ext/view/MultiSelectorSearch.js';
import Ext_view_MultiSelectorSearch from './Ext/view/MultiSelectorSearch.js';
import ElementParser from './ElementParser.js';

export default class EWCMultiselector_search extends Ext_view_MultiSelectorSearch {
    constructor() {
        super ([], []);
        this.xtype = 'multiselector-search';
    }

}
window.customElements.define('ext-multiselector-search', ElementParser.withParsedCallback(EWCMultiselector_search));

