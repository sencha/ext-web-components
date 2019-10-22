import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtYearpicker extends Ext_panel_YearPicker {
    constructor() {
        super ([],[])
        this.xtype = 'yearpicker';
    }
}
window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(ExtYearpicker))
