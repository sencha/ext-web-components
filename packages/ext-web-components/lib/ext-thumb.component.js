import Ext_slider_Thumb_Component from './Ext/slider/Thumb'

export class ExtThumbComponent extends Ext_slider_Thumb_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-thumb', ExtThumbComponent);
    });
})();
