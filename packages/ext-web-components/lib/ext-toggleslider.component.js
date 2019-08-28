import Ext_slider_Toggle_Component from './Ext/slider/Toggle'

export class ExtTogglesliderComponent extends Ext_slider_Toggle_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-toggleslider', ExtTogglesliderComponent);
    });
})();
