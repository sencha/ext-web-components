//import Ext_field_Time from '@sencha/ext-runtime-base/dist/./Ext/field/Time.js';
import Ext_field_Time from './Ext/field/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTimefield extends Ext_field_Time {
    constructor() {
        super ([], []);
        this.xtype = 'timefield';
    }

}
window.customElements.define('ext-timefield', HTMLParsedElement.withParsedCallback(EWCTimefield));

