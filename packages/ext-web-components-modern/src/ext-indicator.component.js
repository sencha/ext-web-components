//import Ext_Indicator from '@sencha/ext-runtime-base/dist/./Ext/Indicator.js';
import Ext_Indicator from './Ext/Indicator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCIndicator extends Ext_Indicator {
    constructor() {
        super ([], []);
        this.xtype = 'indicator';
    }

}
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(EWCIndicator));

