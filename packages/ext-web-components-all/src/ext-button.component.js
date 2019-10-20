import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtButton extends Ext_Button {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'button'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-button', ExtButton);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(ExtButton))
//export default reactify(ExtButton);