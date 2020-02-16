import Ext_field_FileButton from './Ext/field/FileButton.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCFilebutton extends Ext_field_FileButton {
  constructor() {
    super ([], []);
    this.xtype = 'filebutton';
  }
}
try {
  window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
}
catch(e) {
  window.customElements.define('ext-filebutton', EWCFilebutton);
}
