import Ext_form_field_FileButton from './Ext/form/field/FileButton.js';
import ElementParser from './ElementParser.js';

export default class EWCFilebutton extends Ext_form_field_FileButton {
  constructor() {
    super ([], []);
    this.xtype = 'filebutton';
  }
}
window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
