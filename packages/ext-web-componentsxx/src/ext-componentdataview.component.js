import Ext_dataview_Component from './Ext/dataview/Component'
import HTMLParsedElement from './HTMLParsedElement'

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
