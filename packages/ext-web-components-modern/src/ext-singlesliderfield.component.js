//import Ext_field_SingleSlider from '@sencha/ext-runtime-base/dist/./Ext/field/SingleSlider.js';
import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSinglesliderfield extends Ext_field_SingleSlider {
    constructor() {
        super ([], []);
        this.xtype = 'singlesliderfield';
    }

}
window.customElements.define('ext-singlesliderfield', HTMLParsedElement.withParsedCallback(EWCSinglesliderfield));

