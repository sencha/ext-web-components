import Ext_field_Container_Component from './Ext/field/Container'

export class ExtContainerfieldComponent extends Ext_field_Container_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-containerfield', ExtContainerfieldComponent);
    });
})();
