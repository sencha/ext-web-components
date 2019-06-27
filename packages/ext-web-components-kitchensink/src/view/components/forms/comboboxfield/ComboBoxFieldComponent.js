import './ComboBoxFieldComponent.html';
import data from './ComboBoxFieldComponentData.js';

export default class ComboBoxFieldComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['name', 'abbrev'],
            data
        });
    }

    comboboxFieldReady = (event) => {
        this.comboboxCmp = event.detail.cmp;
        this.comboboxCmp.setStore(this.store);
    }
}
