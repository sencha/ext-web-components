import Ext_pivot_d3_Container_Component from './Ext/pivot/d3/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotd3containerComponent extends Ext_pivot_d3_Container_Component {
    constructor() {
        super ()
        this.xtype = 'pivotd3container'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotd3container', ExtPivotd3containerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotd3container', HTMLParsedElement.withParsedCallback(ExtPivotd3containerComponent))