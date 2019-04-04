import './GridFilteringComponent.html';
import model from '../../CompanyModel';

Ext.require([
    'Ext.grid.filters.*'
]);

export default class GridFilteringComponent {
  constructor () {}

  gridReady(event) {
    const store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/BigData'
      }
    });

    this.grid = event.detail.cmp;
    this.grid.setStore(store);
    // let columns = Object.assign([], this.grid.getColumns());
    // // let columns = JSON.parse(JSON.stringify(this.grid.getColumns());
    // const lastColumn = columns[columns.length - 1];
    // columns.pop();
    // columns.unshift(lastColumn);
    // debugger;
    // this.grid.setColumns(columns);
    // debugger;
  }

  nameColumnReady(event) {
    this.nameColumn = event.detail.cmp;
    this.nameColumn.setSorter({
      sorterFn: this.nameSorter.bind(this)
    });
  }

  nameSorter(rec1, rec2) {
    let rec1Name = rec1.get('surname') + rec1.get('forename'),
        rec2Name = rec2.get('surname') + rec2.get('forename');

    if (rec1Name > rec2Name) {
        return 1;
    }

    if (rec1Name < rec2Name) {
        return -1;
    }

    return 0;
  }
}
