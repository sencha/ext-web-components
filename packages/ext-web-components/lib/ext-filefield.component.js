import Ext_field_File_Component from './Ext/field/File'

export class ExtFilefieldComponent extends Ext_field_File_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-filefield', ExtFilefieldComponent);
    });
})();
