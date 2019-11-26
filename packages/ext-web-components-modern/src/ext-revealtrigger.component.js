//import Ext_field_trigger_Reveal from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Reveal.js';
import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRevealtrigger extends Ext_field_trigger_Reveal {
    constructor() {
        super ([], []);
        this.xtype = 'revealtrigger';
    }

}
window.customElements.define('ext-revealtrigger', HTMLParsedElement.withParsedCallback(EWCRevealtrigger));

