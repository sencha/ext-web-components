import Ext_grid_Row from './Ext/grid/Row.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtGridrowComponent extends Ext_grid_Row {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridrow'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridrow', ExtGridrowComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrowComponent))
