import './EditableRowComponent.html';
import model from '../../data/PlantModel';

Ext.require([
    'Ext.grid.rowedit.Plugin'
]);

export default class EditableRowComponent {
    onGirdReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            model,
    
            proxy: {
                type: 'ajax',
                url: 'resources/data/Grids/plants.xml',
                reader: {
                    type: 'xml',
                    record: 'plant'
                }
            }
        })

        const editableGrid = event.detail.cmp;
        editableGrid.setStore(store);
    }
}
