import Ext_form_Display_Component from './Ext/form/Display'

export class ExtDisplayfieldComponent extends Ext_form_Display_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-displayfield', ExtDisplayfieldComponent);
    });
})();
