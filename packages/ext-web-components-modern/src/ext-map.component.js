//import Ext_Map from '@sencha/ext-runtime-base/dist/./Ext/Map.js';
import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMap extends Ext_Map {
    constructor() {
        super ([], []);
        this.xtype = 'map';
    }

}
window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(EWCMap));

