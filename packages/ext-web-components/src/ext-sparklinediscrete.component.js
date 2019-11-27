//import Ext_sparkline_Discrete from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Discrete.js';
import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSparklinediscrete extends Ext_sparkline_Discrete {
    constructor() {
        super ([], []);
        this.xtype = 'sparklinediscrete';
    }

}
window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(EWCSparklinediscrete));

