import './ComboBoxFieldComponent.html';
import data from './ComboBoxFieldComponentData.js';

export default class ComboBoxFieldComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['name', 'abbrev'],
      data
    });
  }

  comboboxfieldready(event) {
    this.cmp = event.detail.cmp;
    this.cmp.setStore(this.store);
  }
}
