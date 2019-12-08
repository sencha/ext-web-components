//import Ext_ux_Multiselect from '@sencha/ext-runtime-base/dist/./Ext/ux/Multiselect.js';
import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './ElementParser.js';

export default class EWCMultiselect extends Ext_ux_Multiselect {
    constructor() {
        super ([], []);
        this.xtype = 'multiselect';
    }

}
window.customElements.define('ext-multiselect', ElementParser.withParsedCallback(EWCMultiselect));

