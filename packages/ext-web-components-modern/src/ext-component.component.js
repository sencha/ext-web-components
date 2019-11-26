//import Ext_Gadget from '@sencha/ext-runtime-base/dist/./Ext/Gadget.js';
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCComponent extends Ext_Gadget {
    constructor() {
        super ([], []);
        this.xtype = 'component';
    }

}
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(EWCComponent));

