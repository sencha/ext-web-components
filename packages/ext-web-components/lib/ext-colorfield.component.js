import Ext_ux_colorpick_Field_Component from './Ext/ux/colorpick/Field'

export class ExtColorfieldComponent extends Ext_ux_colorpick_Field_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-colorfield', ExtColorfieldComponent);
    });
})();
