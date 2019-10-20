import Ext_SplitButton from './Ext/SplitButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSplitbutton extends Ext_SplitButton {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'splitbutton'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-splitbutton', ExtSplitbutton);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-splitbutton', HTMLParsedElement.withParsedCallback(ExtSplitbutton))
//export default reactify(ExtSplitbutton);