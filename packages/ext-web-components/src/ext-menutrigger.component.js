//import Ext_field_trigger_Menu from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Menu.js';
import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenutrigger extends Ext_field_trigger_Menu {
    constructor() {
        super ([], []);
        this.xtype = 'menutrigger';
    }

}
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(EWCMenutrigger));

