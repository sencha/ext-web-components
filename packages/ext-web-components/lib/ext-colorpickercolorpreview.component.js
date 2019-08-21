import Ext_ux_colorpick_ColorPreview_Component from './Ext/ux/colorpick/ColorPreview'

export class ExtColorpickercolorpreviewComponent extends Ext_ux_colorpick_ColorPreview_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreviewComponent);
    });
})();
