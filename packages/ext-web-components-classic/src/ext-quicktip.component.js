//import Ext_QuickTip from '@sencha/ext-runtime-base/dist/./Ext/QuickTip.js';
import Ext_QuickTip from './Ext/QuickTip.js';
import ElementParser from './ElementParser.js';

export default class EWCQuicktip extends Ext_QuickTip {
    constructor() {
        super ([], []);
        this.xtype = 'quicktip';
    }

}
window.customElements.define('ext-quicktip', ElementParser.withParsedCallback(EWCQuicktip));

