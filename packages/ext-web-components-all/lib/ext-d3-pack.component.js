import Ext_d3_hierarchy_Pack_Component from './Ext/d3/hierarchy/Pack'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_packComponent extends Ext_d3_hierarchy_Pack_Component {
    constructor() {
        super ()
        this.xtype = 'd3-pack'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-pack', ExtD3_packComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-pack', HTMLParsedElement.withParsedCallback(ExtD3_packComponent))
