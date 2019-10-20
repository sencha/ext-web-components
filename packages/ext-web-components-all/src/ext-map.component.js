import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMap extends Ext_Map {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'map'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-map', ExtMap);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(ExtMap))
//export default reactify(ExtMap);