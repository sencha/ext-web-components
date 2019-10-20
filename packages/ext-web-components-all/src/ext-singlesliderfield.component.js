import Ext_field_SingleSlider from './Ext/field/SingleSlider.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSinglesliderfield extends Ext_field_SingleSlider {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'singlesliderfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-singlesliderfield', ExtSinglesliderfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-singlesliderfield', HTMLParsedElement.withParsedCallback(ExtSinglesliderfield))
//export default reactify(ExtSinglesliderfield);