import Ext_draw_Component from './Ext/draw/Component.js';
import ElementParser from './ElementParser.js';

export default class EWCDraw extends Ext_draw_Component {
  constructor() {
    super ([], []);
    this.xtype = 'draw';
  }
}
window.customElements.define('ext-draw', ElementParser.withParsedCallback(EWCDraw));
