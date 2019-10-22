import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtColorbutton extends Ext_ux_colorpick_Button {
    constructor() {
        super ([],[])
        this.xtype = 'colorbutton';
    }
}
window.customElements.define('ext-colorbutton', HTMLParsedElement.withParsedCallback(ExtColorbutton))
