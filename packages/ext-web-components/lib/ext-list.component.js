import Ext_List_Component from './Ext/List'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtListComponent extends Ext_List_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'list'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-list', ExtListComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(ExtListComponent))
