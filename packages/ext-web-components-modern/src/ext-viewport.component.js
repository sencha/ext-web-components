//import Ext_viewport_Default from '@sencha/ext-runtime-base/dist/./Ext/viewport/Default.js';
import Ext_viewport_Default from './Ext/viewport/Default.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCViewport extends Ext_viewport_Default {
    constructor() {
        super ([], []);
        this.xtype = 'viewport';
    }

}
window.customElements.define('ext-viewport', HTMLParsedElement.withParsedCallback(EWCViewport));

