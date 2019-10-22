import Ext_field_File from './Ext/field/File.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtFilefield extends Ext_field_File {
    constructor() {
        super ([],[])
        this.xtype = 'filefield';
    }
}
window.customElements.define('ext-filefield', HTMLParsedElement.withParsedCallback(ExtFilefield))
