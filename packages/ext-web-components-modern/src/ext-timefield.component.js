//import Ext_field_Time from '@sencha/ext-runtime-base/dist/./Ext/field/Time.js';
import Ext_field_Time from './Ext/field/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimefield extends Ext_field_Time {
    constructor() {
        super ([], []);
        this.xtype = 'timefield';
    }

}
window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));

