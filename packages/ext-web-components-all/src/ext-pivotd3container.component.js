import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotd3container extends Ext_pivot_d3_Container {
    constructor() {
        super ([],[])
        this.xtype = 'pivotd3container';
    }
}
window.customElements.define('ext-pivotd3container', HTMLParsedElement.withParsedCallback(ExtPivotd3container))
