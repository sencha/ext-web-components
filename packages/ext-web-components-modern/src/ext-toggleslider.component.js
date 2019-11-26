//import Ext_slider_Toggle from '@sencha/ext-runtime-base/dist/./Ext/slider/Toggle.js';
import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCToggleslider extends Ext_slider_Toggle {
    constructor() {
        super ([], []);
        this.xtype = 'toggleslider';
    }

}
window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(EWCToggleslider));

