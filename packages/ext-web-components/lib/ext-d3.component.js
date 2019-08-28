import Ext_d3_svg_Svg_Component from './Ext/d3/svg/Svg'

export class ExtD3Component extends Ext_d3_svg_Svg_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3', ExtD3Component);
    });
})();
