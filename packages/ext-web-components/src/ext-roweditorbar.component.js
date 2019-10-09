import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRoweditorbarComponent extends Ext_grid_rowedit_Bar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'roweditorbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-roweditorbar', ExtRoweditorbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(ExtRoweditorbarComponent))
