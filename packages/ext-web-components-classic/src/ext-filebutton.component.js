import Ext_form_field_FileButton from './Ext/form/field/FileButton.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFilebutton extends Ext_form_field_FileButton {
  constructor() {
    super ([], []);
    this.xtype = 'filebutton';
  }
}
try {
  if (window.customElements.get('ext-filebutton') == undefined) {
    window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
  }
}
catch(e) {
  if (window.customElements.get('ext-filebutton') == undefined) {
    window.customElements.define('ext-filebutton', EWCFilebutton);
  }
}
