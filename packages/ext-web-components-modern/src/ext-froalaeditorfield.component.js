//import Ext_froala_EditorField from '@sencha/ext-runtime-base/dist/./Ext/froala/EditorField.js';
import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFroalaeditorfield extends Ext_froala_EditorField {
    constructor() {
        super ([], []);
        this.xtype = 'froalaeditorfield';
    }

}
window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(EWCFroalaeditorfield));

