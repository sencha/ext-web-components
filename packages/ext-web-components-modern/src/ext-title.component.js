//import Ext_Title from '@sencha/ext-runtime-base/dist/./Ext/Title.js';
import Ext_Title from './Ext/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTitle extends Ext_Title {
    constructor() {
        super ([], []);
        this.xtype = 'title';
    }

}
window.customElements.define('ext-title', HTMLParsedElement.withParsedCallback(EWCTitle));

