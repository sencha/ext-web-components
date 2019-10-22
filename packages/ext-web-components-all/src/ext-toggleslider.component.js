import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtToggleslider extends Ext_slider_Toggle {
    constructor() {
        super ([],[])
        this.xtype = 'toggleslider';
    }
}
window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(ExtToggleslider))
