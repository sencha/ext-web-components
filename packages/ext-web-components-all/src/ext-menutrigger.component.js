import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMenutrigger extends Ext_field_trigger_Menu {
    constructor() {
        super ([],[])
        this.xtype = 'menutrigger';
    }
}
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(ExtMenutrigger))
