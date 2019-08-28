import Ext_field_SingleSlider_Component from './Ext/field/SingleSlider'

export class ExtSinglesliderfieldComponent extends Ext_field_SingleSlider_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-singlesliderfield', ExtSinglesliderfieldComponent);
    });
})();
