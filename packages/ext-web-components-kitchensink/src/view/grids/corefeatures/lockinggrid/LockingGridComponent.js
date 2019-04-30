import './LockingGridComponent.html';
import model from '../../data/CompanyModel';
Ext.require([
    'Ext.data.summary.Average',
    'Ext.data.summary.Max',
]);

export default class LockingGridComponent {
  constructor () {}

  gridReady(event) {
    const store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: 'ajax',
        url: 'resources/data/CompanyData.json',
      }
    });

    const lockedGrid = event.detail.cmp;
    lockedGrid.setStore(store);
  }
}
