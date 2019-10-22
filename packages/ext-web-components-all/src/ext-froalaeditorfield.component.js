import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtFroalaeditorfield extends Ext_froala_EditorField {
    constructor() {
        super ([],[])
        this.xtype = 'froalaeditorfield';
    }
}
window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(ExtFroalaeditorfield))
