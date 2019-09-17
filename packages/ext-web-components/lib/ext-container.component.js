import Ext_container_Container_Component from './Ext/container/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtContainerComponent extends Ext_container_Container_Component {
    constructor() {
        super (
            {},
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
