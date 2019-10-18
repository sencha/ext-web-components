import Ext_grid_RowBody from './Ext/grid/RowBody.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRowbodyComponent extends Ext_grid_RowBody {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'rowbody'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rowbody', ExtRowbodyComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(ExtRowbodyComponent))
