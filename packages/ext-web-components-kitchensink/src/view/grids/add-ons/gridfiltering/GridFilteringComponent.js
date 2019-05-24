import './GridFilteringComponent.html';
import model from '../../data/CompanyModel';
import '../../data/BigData';

Ext.require([
    'Ext.grid.filters.*'
]);

export default class GridFilteringComponent {
    gridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/BigData'
            }
        });

        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(store);
        // this.grid.setRowNumbers(true);
        // let columns = Object.assign([], this.grid.getColumns());
        // // let columns = JSON.parse(JSON.stringify(this.grid.getColumns());
        // const lastColumn = columns[columns.length - 1];
        // columns.pop();
        // columns.unshift(lastColumn);
        // debugger;
        // this.grid.setColumns(columns);
        // debugger;
    }

    nameColumnReady = (event) => {
        this.nameColumnCmp = event.detail.cmp;
        this.nameColumnCmp.setSorter({
            sorterFn: this.nameSorter.bind(this)
        });
    }

    nameSorter = (rec1, rec2) => {
        let rec1Name = rec1.get('surname') + rec1.get('forename'),
            rec2Name = rec2.get('surname') + rec2.get('forename');

        if (rec1Name > rec2Name) {return 1;}
        if (rec1Name < rec2Name) {return -1;}
        return 0;
    }
}
