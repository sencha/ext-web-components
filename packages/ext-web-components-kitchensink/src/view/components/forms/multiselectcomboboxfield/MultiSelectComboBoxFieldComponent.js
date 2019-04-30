import './MultiSelectComboBoxFieldComponent.html';
import data from './MultiSelectComboBoxFieldComponentData.js';

export default class MultiSelectComboBoxFieldComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['name', 'abbrev'],
      data
    });
  }

  multiselectcomboboxfieldReady(event) {
    this.cmp = event.detail.cmp;
    this.cmp.setStore(this.store);
  }

}
