import Ext_DataView from './Ext/DataView.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDataview extends Ext_DataView {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'dataview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dataview', ExtDataview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-dataview', HTMLParsedElement.withParsedCallback(ExtDataview))
//export default reactify(ExtDataview);