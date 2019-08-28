import Ext_form_Slider_Component from './Ext/form/Slider'

export class ExtSliderfieldComponent extends Ext_form_Slider_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sliderfield', ExtSliderfieldComponent);
    });
})();
