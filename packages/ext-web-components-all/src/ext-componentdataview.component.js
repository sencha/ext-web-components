import Ext_dataview_Component from './Ext/dataview/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtComponentdataview extends Ext_dataview_Component {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'componentdataview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-componentdataview', ExtComponentdataview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(ExtComponentdataview))
//export default reactify(ExtComponentdataview);