import Ext_field_FileButton from './Ext/field/FileButton.js';
import ElementParser from './ElementParser.js';

export default class EWCFilebutton extends Ext_field_FileButton {
  constructor() {
    super ([], []);
    this.xtype = 'filebutton';
  }
}
window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
