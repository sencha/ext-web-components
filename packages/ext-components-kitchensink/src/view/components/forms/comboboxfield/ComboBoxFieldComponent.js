import './ComboBoxFieldComponent.css';
import './ComboBoxFieldComponent.html';
import data from './data.js';

export default class ComboBoxFieldComponent {
  constructor () {
    console.log('in ComboBoxFieldComponent constructor');

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
