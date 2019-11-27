//import Ext_Gadget from '@sencha/ext-runtime-base/dist/./Ext/Gadget.js';
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCWidget extends Ext_Gadget {
    constructor() {
        super ([], []);
        this.xtype = 'widget';
    }

}
window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(EWCWidget));

