import Ext_ux_colorpick_Selector_Component from './Ext/ux/colorpick/Selector'

export class ExtColorselectorComponent extends Ext_ux_colorpick_Selector_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-colorselector', ExtColorselectorComponent);
    });
})();
