import Ext_Editor from './Ext/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtEditor extends Ext_Editor {
    constructor() {
        super ([],[])
        this.xtype = 'editor';
    }
}
window.customElements.define('ext-editor', HTMLParsedElement.withParsedCallback(ExtEditor))
