import Ext_froala_Editor_Component from './Ext/froala/Editor'

export class ExtFroalaeditorComponent extends Ext_froala_Editor_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-froalaeditor', ExtFroalaeditorComponent);
    });
})();
