import Ext_form_Radio_Component from './Ext/form/Radio'

export class ExtRadiofieldComponent extends Ext_form_Radio_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-radiofield', ExtRadiofieldComponent);
    });
})();
