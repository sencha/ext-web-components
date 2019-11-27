//import Ext_LoadMask from '@sencha/ext-runtime-base/dist/./Ext/LoadMask.js';
import Ext_LoadMask from './Ext/LoadMask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCLoadmask extends Ext_LoadMask {
    constructor() {
        super ([], []);
        this.xtype = 'loadmask';
    }

}
window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(EWCLoadmask));

