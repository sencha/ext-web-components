import Ext_Picker from './Ext/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPicker extends Ext_Picker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'picker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-picker', ExtPicker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPicker))
//export default reactify(ExtPicker);