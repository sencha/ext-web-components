import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtColorselector extends Ext_ux_colorpick_Selector {
    constructor() {
        super ([],[])
        this.xtype = 'colorselector';
    }
}
window.customElements.define('ext-colorselector', HTMLParsedElement.withParsedCallback(ExtColorselector))
