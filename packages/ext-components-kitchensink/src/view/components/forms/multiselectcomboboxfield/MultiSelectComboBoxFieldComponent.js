import './MultiSelectComboBoxFieldComponent.css';
import './MultiSelectComboBoxFieldComponent.html';
import data from './data.js';
import data from './MultiSelectComboBoxFieldComponentData.js';

export default class MultiSelectComboBoxFieldComponent {
  constructor () {
    console.log('in MultiSelectComboBoxFieldComponent constructor');

    this.store = Ext.create('Ext.data.Store', {
      fields: ['name', 'abbrev'],
      data
    });
  }


  multiselectcomboboxfieldready(event) {
    this.cmp = event.detail.cmp;
    this.cmp.setStore(this.store);
  }

}
