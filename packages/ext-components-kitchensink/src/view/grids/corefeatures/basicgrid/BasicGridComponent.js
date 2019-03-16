import './BasicGridComponent.scss';
import './BasicGridComponent.html';
import { BasicGridComponentData } from './BasicGridComponentData';
export default class BasicGridComponent {

  constructor () {
    console.log('in BasicGridComponent constructor');
    this.basicGridComponentData = new BasicGridComponentData(1000)
    this.store = Ext.create('Ext.data.Store', {
      data: this.basicGridComponentData.data
    });
  }

  readyGrid(event) {
    console.log('readyGrid')
    var cmp = event.detail.cmp
    this.gridCmp = cmp
    this.gridCmp.setStore(this.store)
  }

}
