//import Ext_field_Panel from '@sencha/ext-runtime-base/dist/./Ext/field/Panel.js';
import Ext_field_Panel from './Ext/field/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFieldpanel extends Ext_field_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'fieldpanel';
    }

}
window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(EWCFieldpanel));

