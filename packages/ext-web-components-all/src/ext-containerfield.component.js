import Ext_field_Container from './Ext/field/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtContainerfield extends Ext_field_Container {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'containerfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-containerfield', ExtContainerfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfield))
//export default reactify(ExtContainerfield);