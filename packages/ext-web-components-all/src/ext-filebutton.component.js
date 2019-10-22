import Ext_field_FileButton from './Ext/field/FileButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtFilebutton extends Ext_field_FileButton {
    constructor() {
        super ([],[])
        this.xtype = 'filebutton';
    }
}
window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(ExtFilebutton))
