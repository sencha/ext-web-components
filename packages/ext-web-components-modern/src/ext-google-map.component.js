import Ext_Map from './Ext/Map.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGoogle_map extends Ext_Map {
  constructor() {
    super ([], []);
    this.xtype = 'google-map';
  }
}
try {
  if (window.customElements.get('ext-google-map') == undefined) {
    window.customElements.define('ext-google-map', ElementParser.withParsedCallback(EWCGoogle_map));
  }
}
catch(e) {
  if (window.customElements.get('ext-google-map') == undefined) {
    window.customElements.define('ext-google-map', EWCGoogle_map);
  }
}
