import Ext_field_File from './Ext/field/File.js';
import ElementParser from './ElementParser.js';

export default class EWCFilefield extends Ext_field_File {
  constructor() {
    super ([], []);
    this.xtype = 'filefield';
  }
}
window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));
