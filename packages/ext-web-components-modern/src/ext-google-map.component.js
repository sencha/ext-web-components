//import Ext_Map from '@sencha/ext-runtime-base/dist/./Ext/Map.js';
import Ext_Map from './Ext/Map.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGoogle_map extends Ext_Map {
    constructor() {
        super ([], []);
        this.xtype = 'google-map';
    }

}
window.customElements.define('ext-google-map', HTMLParsedElement.withParsedCallback(EWCGoogle_map));

