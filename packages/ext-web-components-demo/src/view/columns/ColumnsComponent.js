import './ColumnsComponent.scss';
import './ColumnsComponent.html';
import { ColumnsComponentData } from './ColumnsComponentData';

export default class ColumnsComponent {

  constructor () {
    //console.log('in ColumnsComponent constructor');
  }

  onGridReady(event) {
    console.log('in ready event')
    this.gridCmp = event.detail.cmp
    this.gridCmp.setData(new ColumnsComponentData(10).data)
  }

  onSurNameReady(event) {
    console.log('in onSurNameReady event')
    //this.gridCmp = event.detail.cmp
    //this.gridCmp.setData(new ColumnsComponentData(10).data)
  }

  renderer(value, record, dataIndex, cell, column) {
    console.dir('start')
    console.dir(value)
    console.dir(record)
    console.dir(dataIndex)
    console.dir(cell)
    console.dir(column)
    console.dir('end')
//    return '<ext-panel title="hi"><div>' + value + '</div></ext-panel>'
    return '<ext-button text="' + value + '"></ext-button>'
  }

}
