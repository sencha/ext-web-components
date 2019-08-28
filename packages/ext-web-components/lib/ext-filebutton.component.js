import Ext_field_FileButton_Component from './Ext/field/FileButton'

export class ExtFilebuttonComponent extends Ext_field_FileButton_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-filebutton', ExtFilebuttonComponent);
    });
})();
