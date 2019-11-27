//import Ext_sparkline_TriState from '@sencha/ext-runtime-base/dist/./Ext/sparkline/TriState.js';
import Ext_sparkline_TriState from './Ext/sparkline/TriState.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparklinetristate extends Ext_sparkline_TriState {
    constructor() {
        super ([], []);
        this.xtype = 'sparklinetristate';
    }

}
window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(EWCSparklinetristate));

