import Ext_Button_Component from './Ext/Button'

export class ExtButtonComponent extends Ext_Button_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-button', ExtButtonComponent);
    });
})();
