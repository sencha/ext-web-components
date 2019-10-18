import Ext_List from './Ext/List.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtListComponent extends Ext_List {
    constructor() {
        super (
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
