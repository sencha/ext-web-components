import Ext_draw_Component from './Ext/draw/Component.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDraw extends Ext_draw_Component {
  constructor() {
    super ([], []);
    this.xtype = 'draw';
  }
}
try {
  if (window.customElements.get('ext-draw') == undefined) {
    window.customElements.define('ext-draw', ElementParser.withParsedCallback(EWCDraw));
  }
}
catch(e) {
  if (window.customElements.get('ext-draw') == undefined) {
    window.customElements.define('ext-draw', EWCDraw);
  }
}
