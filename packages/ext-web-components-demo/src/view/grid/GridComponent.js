import './GridComponent.scss';
import './GridComponent.html';
import { GridComponentData } from './GridComponentData';

export default class GridComponent {

  constructor () {
    //console.log('in GridComponent constructor');
  }

  onGridReady(event) {
    //console.log('in ready event')
    this.gridCmp = event.detail.cmp
    this.gridCmp.setData(new GridComponentData(10).data)
  }

  renderer(value, record, dataIndex, cell, column) {
    // console.dir('start')
    // console.dir(value)
    // console.dir(record)
    // console.dir(dataIndex)
    // console.dir(cell)
    // console.dir(column)
    // console.dir('end')
//    return '<ext-panel title="hi"><div>' + value + '</div></ext-panel>'
    return '<ext-button text="' + value + '"></ext-button>'
  }

}
