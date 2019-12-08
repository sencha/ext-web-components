//import Ext_ux_colorpick_SliderAlpha from '@sencha/ext-runtime-base/dist/./Ext/ux/colorpick/SliderAlpha.js';
import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickerslideralpha extends Ext_ux_colorpick_SliderAlpha {
    constructor() {
        super ([], []);
        this.xtype = 'colorpickerslideralpha';
    }

}
window.customElements.define('ext-colorpickerslideralpha', ElementParser.withParsedCallback(EWCColorpickerslideralpha));

