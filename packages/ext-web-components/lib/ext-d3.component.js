import Ext_d3_svg_Svg_Component from './Ext/d3/svg/Svg'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3Component extends Ext_d3_svg_Svg_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'd3'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3', ExtD3Component);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3', HTMLParsedElement.withParsedCallback(ExtD3Component))
