import Ext_dataview_BoundList from './Ext/dataview/BoundList'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtBoundlistComponent extends Ext_dataview_BoundList {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'boundlist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-boundlist', ExtBoundlistComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-boundlist', HTMLParsedElement.withParsedCallback(ExtBoundlistComponent))
