import Ext_slider_Thumb from './Ext/slider/Thumb.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtThumb extends Ext_slider_Thumb {
    constructor() {
        super ([],[])
        this.xtype = 'thumb';
    }
}
window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumb))
