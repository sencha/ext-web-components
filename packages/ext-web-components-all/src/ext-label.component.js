import Ext_Label from './Ext/Label.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtLabel extends Ext_Label {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'label'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-label', ExtLabel);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabel))
//export default reactify(ExtLabel);