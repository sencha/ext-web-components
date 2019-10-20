import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtD3_svg extends Ext_d3_svg_Svg {
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
//        window.customElements.define('ext-d3-svg', ExtD3_svg);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(ExtD3_svg))
//export default reactify(ExtD3_svg);