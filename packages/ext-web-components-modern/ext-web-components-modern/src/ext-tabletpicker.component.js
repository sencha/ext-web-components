import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTabletpicker extends Ext_picker_Tablet {
  constructor() {
    super ([], []);
    this.xtype = 'tabletpicker';
  }
}
try {
  if (window.customElements.get('ext-tabletpicker') == undefined) {
    window.customElements.define('ext-tabletpicker', ElementParser.withParsedCallback(EWCTabletpicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-tabletpicker') == undefined) {
    window.customElements.define('ext-tabletpicker', EWCTabletpicker);
  }
}
