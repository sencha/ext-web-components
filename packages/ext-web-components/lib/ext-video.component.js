import Ext_Video_Component from './Ext/Video'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtVideoComponent extends Ext_Video_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'video'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-video', ExtVideoComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideoComponent))
