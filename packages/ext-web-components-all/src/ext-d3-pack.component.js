import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtD3_packComponent extends Ext_d3_hierarchy_Pack {
    constructor() {
        super (
            [],
            []
        )
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
