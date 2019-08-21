import Ext_ux_colorpick_Button_Component from './Ext/ux/colorpick/Button'

export class ExtColorbuttonComponent extends Ext_ux_colorpick_Button_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-colorbutton', ExtColorbuttonComponent);
    });
})();
