//import Ext_field_FieldGroupContainer from '@sencha/ext-runtime-base/dist/./Ext/field/FieldGroupContainer.js';
import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGroupcontainer extends Ext_field_FieldGroupContainer {
    constructor() {
        super ([], []);
        this.xtype = 'groupcontainer';
    }

}
window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(EWCGroupcontainer));

