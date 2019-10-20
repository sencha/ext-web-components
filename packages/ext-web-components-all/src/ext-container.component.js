import Ext_container_Container from './Ext/container/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtContainer extends Ext_container_Container {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'container'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-container', ExtContainer);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(ExtContainer))
//export default reactify(ExtContainer);