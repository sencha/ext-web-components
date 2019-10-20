import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotheatmap extends Ext_pivot_d3_HeatMap {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotheatmap'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotheatmap', ExtPivotheatmap);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotheatmap', HTMLParsedElement.withParsedCallback(ExtPivotheatmap))
//export default reactify(ExtPivotheatmap);