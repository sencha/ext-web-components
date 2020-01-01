import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import ElementParser from './ElementParser.js';

export default class EWCTabletpicker extends Ext_picker_Tablet {
  constructor() {
    super ([], []);
    this.xtype = 'tabletpicker';
  }
}
window.customElements.define('ext-tabletpicker', ElementParser.withParsedCallback(EWCTabletpicker));
