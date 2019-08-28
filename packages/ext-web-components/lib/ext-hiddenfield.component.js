import Ext_form_Hidden_Component from './Ext/form/Hidden'

export class ExtHiddenfieldComponent extends Ext_form_Hidden_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-hiddenfield', ExtHiddenfieldComponent);
    });
})();
