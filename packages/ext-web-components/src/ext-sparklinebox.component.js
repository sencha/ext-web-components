//import Ext_sparkline_Box from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Box.js';
import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparklinebox extends Ext_sparkline_Box {
    constructor() {
        super ([], []);
        this.xtype = 'sparklinebox';
    }

}
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(EWCSparklinebox));

