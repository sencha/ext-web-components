import Ext_Mask_Component from './Ext/Mask'

export class ExtMaskComponent extends Ext_Mask_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-mask', ExtMaskComponent);
    });
})();
