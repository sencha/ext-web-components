import Ext_ux_TreePicker from './Ext/ux/TreePicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreepicker extends Ext_ux_TreePicker {
  constructor() {
    super ([], []);
    this.xtype = 'treepicker';
  }
}
try {
  if (window.customElements.get('ext-treepicker') == undefined) {
    window.customElements.define('ext-treepicker', ElementParser.withParsedCallback(EWCTreepicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-treepicker') == undefined) {
    window.customElements.define('ext-treepicker', EWCTreepicker);
  }
}
