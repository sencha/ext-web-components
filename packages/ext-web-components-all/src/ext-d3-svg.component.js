import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtD3_svgComponent extends Ext_d3_svg_Svg {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-svg'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-svg', ExtD3_svgComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(ExtD3_svgComponent))
