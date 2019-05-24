import './MultiSelectComboBoxFieldComponent.html';
import data from './MultiSelectComboBoxFieldComponentData.js';

export default class MultiSelectComboBoxFieldComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['name', 'abbrev'],
            data
        });
    }

    multiselectComboboxFieldReady = (event) => {
        this.multiselectComboBoxCmp = event.detail.cmp;
        this.multiselectComboBoxCmp.setStore(this.store);
    }
}
