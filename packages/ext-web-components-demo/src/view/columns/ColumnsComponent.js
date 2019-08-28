import './ColumnsComponent.scss';
import './ColumnsComponent.html';
import { ColumnsComponentData } from './ColumnsComponentData';

export default class ColumnsComponent {

  constructor () {
    //console.log('in ColumnsComponent constructor');
  }

  onGridReady = event => {
    
    this.gridCmp = event.detail.cmp

    var data = [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
    this.gridCmp.setData(data)
    console.log('setData')
    console.dir(data)


//    this.gridCmp.setData(new ColumnsComponentData(10).data)
  }

  onSurNameReady = event => {
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
