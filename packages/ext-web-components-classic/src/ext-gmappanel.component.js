//import Ext_ux_GMapPanel from '@sencha/ext-runtime-base/dist/./Ext/ux/GMapPanel.js';
import Ext_ux_GMapPanel from './Ext/ux/GMapPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCGmappanel extends Ext_ux_GMapPanel {
    constructor() {
        super ([], []);
        this.xtype = 'gmappanel';
    }

}
window.customElements.define('ext-gmappanel', ElementParser.withParsedCallback(EWCGmappanel));

