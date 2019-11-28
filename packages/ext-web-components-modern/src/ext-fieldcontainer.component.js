//import Ext_field_Container from '@sencha/ext-runtime-base/dist/./Ext/field/Container.js';
import Ext_field_Container from './Ext/field/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFieldcontainer extends Ext_field_Container {
    constructor() {
        super ([], []);
        this.xtype = 'fieldcontainer';
    }

}
window.customElements.define('ext-fieldcontainer', HTMLParsedElement.withParsedCallback(EWCFieldcontainer));

