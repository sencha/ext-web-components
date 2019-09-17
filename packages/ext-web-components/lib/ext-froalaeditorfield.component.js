import Ext_froala_EditorField_Component from './Ext/froala/EditorField'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFroalaeditorfieldComponent extends Ext_froala_EditorField_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'froalaeditorfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-froalaeditorfield', ExtFroalaeditorfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-froalaeditorfield', HTMLParsedElement.withParsedCallback(ExtFroalaeditorfieldComponent))
