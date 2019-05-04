import './GridComponent.scss';
import './GridComponent.html';
import { GridComponentData } from './GridComponentData';

import { define, config } from '../../../next/extjs-core/src';
import { Model } from '../../../next/extjs-data/src/model/Model';
import { Schema } from '../../../next/extjs-data/src/schema/Schema';
import { Store } from '../../../next/extjs-data/src/store/Store';
import  '../../../next/extjs-data/src/proxy/Ajax';

@define class BaseModel extends Model {
  @config static schema = new Schema();
}

@define class Employee extends BaseModel {
  @config static idProperty = 'employeeNo';
  @config static fields = [
    { name: 'employeeNo', type: 'string' },
    { name: 'rating', type: 'string' },
    { name: 'salary', type: 'string' },
    { name: 'forename', type: 'string' },
    { name: 'surname', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'department', type: 'string' },
    { name: 'dob', type: 'string' },
    { name: 'joinDate', type: 'string' },
    { name: 'sickDays', type: 'string' },
    { name: 'holidayDays', type: 'string' },
    { name: 'holidayAllowance', type: 'string' },
    { name: 'noticePeriod', type: 'string' }
  ];
}

export default class GridComponent {

  onGridReady(event) {
    this.gridCmp = event.detail.cmp

    var store = new Store({
      immediateLoad: true,
      model: Employee,
      data: new GridComponentData(10).data
    });
 
    this.gridCmp.setStore(store)
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
