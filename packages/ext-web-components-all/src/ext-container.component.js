import Ext_container_Container from './Ext/container/Container.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtContainerComponent extends Ext_container_Container {
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
//        window.customElements.define('ext-container', ExtContainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(ExtContainerComponent))
