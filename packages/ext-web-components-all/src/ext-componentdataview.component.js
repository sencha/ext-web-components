import Ext_dataview_Component from './Ext/dataview/Component.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtComponentdataviewComponent extends Ext_dataview_Component {
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
//        window.customElements.define('ext-componentdataview', ExtComponentdataviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(ExtComponentdataviewComponent))
