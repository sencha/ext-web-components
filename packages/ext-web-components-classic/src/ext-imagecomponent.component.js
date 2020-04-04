import Ext_Img from './Ext/Img.js';
import ElementParser from './common/ElementParser.js';

export default class EWCImagecomponent extends Ext_Img {
  constructor() {
    super ([], []);
    this.xtype = 'imagecomponent';
  }
}
try {
  if (window.customElements.get('ext-imagecomponent') == undefined) {
    window.customElements.define('ext-imagecomponent', ElementParser.withParsedCallback(EWCImagecomponent));
  }
}
catch(e) {
  if (window.customElements.get('ext-imagecomponent') == undefined) {
    window.customElements.define('ext-imagecomponent', EWCImagecomponent);
  }
}
