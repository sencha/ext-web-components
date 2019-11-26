//import Ext_Editor from '@sencha/ext-runtime-base/dist/./Ext/Editor.js';
import Ext_Editor from './Ext/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCEditor extends Ext_Editor {
    constructor() {
        super ([], []);
        this.xtype = 'editor';
    }

}
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(EWCEditor));

