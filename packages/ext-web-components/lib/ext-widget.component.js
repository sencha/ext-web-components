import Ext_Gadget_Component from './Ext/Gadget'

export class ExtWidgetComponent extends Ext_Gadget_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-widget', ExtWidgetComponent);
    });
})();
