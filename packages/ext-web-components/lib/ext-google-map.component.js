import Ext_Map_Component from './Ext/Map'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGoogle_mapComponent extends Ext_Map_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'google-map'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-google-map', ExtGoogle_mapComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-google-map', HTMLParsedElement.withParsedCallback(ExtGoogle_mapComponent))
