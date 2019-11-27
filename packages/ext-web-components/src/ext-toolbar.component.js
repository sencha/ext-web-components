//import Ext_Toolbar from '@sencha/ext-runtime-base/dist/./Ext/Toolbar.js';
import Ext_Toolbar from './Ext/Toolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCToolbar extends Ext_Toolbar {
    constructor() {
        super ([], []);
        this.xtype = 'toolbar';
    }

}
window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(EWCToolbar));

