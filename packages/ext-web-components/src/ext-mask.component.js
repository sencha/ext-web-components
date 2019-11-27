//import Ext_Mask from '@sencha/ext-runtime-base/dist/./Ext/Mask.js';
import Ext_Mask from './Ext/Mask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMask extends Ext_Mask {
    constructor() {
        super ([], []);
        this.xtype = 'mask';
    }

}
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(EWCMask));

