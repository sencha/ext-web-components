import Ext_slider_Slider_Component from './Ext/slider/Slider'

export class ExtSliderComponent extends Ext_slider_Slider_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-slider', ExtSliderComponent);
    });
})();
