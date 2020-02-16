import Ext_Map from './Ext/Map.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGoogle_map extends Ext_Map {
  constructor() {
    super ([], []);
    this.xtype = 'google-map';
  }
}
try {
  window.customElements.define('ext-google-map', ElementParser.withParsedCallback(EWCGoogle_map));
}
catch(e) {
  window.customElements.define('ext-google-map', EWCGoogle_map);
}
