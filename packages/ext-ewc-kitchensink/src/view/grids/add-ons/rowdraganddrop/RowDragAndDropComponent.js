import './RowDragAndDropComponent.html';
import model from '../../data/CompanyModel';

Ext.require(['Ext.grid.plugin.RowDragDrop']);

export default class RowExpanderComponent {
    gridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            pageSize: null,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/BigData'
            }
        });

        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(store);
    }
}
