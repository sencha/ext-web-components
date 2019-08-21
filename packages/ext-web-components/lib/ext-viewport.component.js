import Ext_viewport_Default_Component from './Ext/viewport/Default'

export class ExtViewportComponent extends Ext_viewport_Default_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-viewport', ExtViewportComponent);
    });
})();
