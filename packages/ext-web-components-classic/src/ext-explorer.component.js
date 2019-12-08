//import Ext_ux_Explorer from '@sencha/ext-runtime-base/dist/./Ext/ux/Explorer.js';
import Ext_ux_Explorer from './Ext/ux/Explorer.js';
import ElementParser from './ElementParser.js';

export default class EWCExplorer extends Ext_ux_Explorer {
    constructor() {
        super ([], []);
        this.xtype = 'explorer';
    }

}
window.customElements.define('ext-explorer', ElementParser.withParsedCallback(EWCExplorer));

