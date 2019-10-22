import Ext_form_Url from './Ext/form/Url.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtUrlfield extends Ext_form_Url {
    constructor() {
        super ([],[])
        this.xtype = 'urlfield';
    }
}
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(ExtUrlfield))
