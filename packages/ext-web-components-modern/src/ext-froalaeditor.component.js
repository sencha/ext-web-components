//import Ext_froala_Editor from '@sencha/ext-runtime-base/dist/./Ext/froala/Editor.js';
import Ext_froala_Editor from './Ext/froala/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCFroalaeditor extends Ext_froala_Editor {
    constructor() {
        super ([], []);
        this.xtype = 'froalaeditor';
    }

}
window.customElements.define('ext-froalaeditor', HTMLParsedElement.withParsedCallback(EWCFroalaeditor));

