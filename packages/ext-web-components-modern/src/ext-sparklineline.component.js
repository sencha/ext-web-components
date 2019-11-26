//import Ext_sparkline_Line from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Line.js';
import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparklineline extends Ext_sparkline_Line {
    constructor() {
        super ([], []);
        this.xtype = 'sparklineline';
    }

}
window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(EWCSparklineline));

