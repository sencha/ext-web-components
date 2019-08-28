import Ext_froala_EditorField_Component from './Ext/froala/EditorField'

export class ExtFroalaeditorfieldComponent extends Ext_froala_EditorField_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-froalaeditorfield', ExtFroalaeditorfieldComponent);
    });
})();
