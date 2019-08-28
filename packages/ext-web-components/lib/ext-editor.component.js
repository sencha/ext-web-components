import Ext_Editor_Component from './Ext/Editor'

export class ExtEditorComponent extends Ext_Editor_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-editor', ExtEditorComponent);
    });
})();
