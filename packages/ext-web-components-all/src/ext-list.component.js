import Ext_List from './Ext/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtList extends Ext_List {
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
//        window.customElements.define('ext-list', ExtList);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(ExtList))
//export default reactify(ExtList);