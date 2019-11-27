//import Ext_field_File from '@sencha/ext-runtime-base/dist/./Ext/field/File.js';
import Ext_field_File from './Ext/field/File.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFilefield extends Ext_field_File {
    constructor() {
        super ([], []);
        this.xtype = 'filefield';
    }

}
window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(EWCFilefield));

