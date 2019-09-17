import Ext_grid_RowBody_Component from './Ext/grid/RowBody'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRowbodyComponent extends Ext_grid_RowBody_Component {
    constructor() {
        super (
            {},
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
