//import Ext_ux_colorpick_Field from '@sencha/ext-runtime-base/dist/./Ext/ux/colorpick/Field.js';
import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCColorfield extends Ext_ux_colorpick_Field {
    constructor() {
        super ([], []);
        this.xtype = 'colorfield';
    }

}
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(EWCColorfield));

