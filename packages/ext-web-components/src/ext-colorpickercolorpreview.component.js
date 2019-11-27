//import Ext_ux_colorpick_ColorPreview from '@sencha/ext-runtime-base/dist/./Ext/ux/colorpick/ColorPreview.js';
import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCColorpickercolorpreview extends Ext_ux_colorpick_ColorPreview {
    constructor() {
        super ([], []);
        this.xtype = 'colorpickercolorpreview';
    }

}
window.customElements.define('ext-colorpickercolorpreview', HTMLParsedElement.withParsedCallback(EWCColorpickercolorpreview));

