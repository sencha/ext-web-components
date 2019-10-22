import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtColorfield extends Ext_ux_colorpick_Field {
    constructor() {
        super ([],[])
        this.xtype = 'colorfield';
    }
}
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(ExtColorfield))
