import Ext_draw_Component_Component from './Ext/draw/Component'

export class ExtDrawComponent extends Ext_draw_Component_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-draw', ExtDrawComponent);
    });
})();
