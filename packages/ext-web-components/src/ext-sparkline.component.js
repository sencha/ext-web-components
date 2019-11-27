//import Ext_sparkline_Base from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Base.js';
import Ext_sparkline_Base from './Ext/sparkline/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparkline extends Ext_sparkline_Base {
    constructor() {
        super ([], []);
        this.xtype = 'sparkline';
    }

}
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(EWCSparkline));

