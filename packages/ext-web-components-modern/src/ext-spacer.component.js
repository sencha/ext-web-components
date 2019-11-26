//import Ext_Spacer from '@sencha/ext-runtime-base/dist/./Ext/Spacer.js';
import Ext_Spacer from './Ext/Spacer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSpacer extends Ext_Spacer {
    constructor() {
        super ([], []);
        this.xtype = 'spacer';
    }

}
window.customElements.define('ext-spacer', HTMLParsedElement.withParsedCallback(EWCSpacer));

