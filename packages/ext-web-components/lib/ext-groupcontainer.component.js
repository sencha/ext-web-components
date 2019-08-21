import Ext_field_FieldGroupContainer_Component from './Ext/field/FieldGroupContainer'

export class ExtGroupcontainerComponent extends Ext_field_FieldGroupContainer_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-groupcontainer', ExtGroupcontainerComponent);
    });
})();
