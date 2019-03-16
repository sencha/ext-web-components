import './BasicGridComponent.scss';
import './BasicGridComponent.html';
import { BasicGridComponentData } from './BasicGridComponentData';
export default class BasicGridComponent {

  readyGrid(event) {
    this.gridCmp = event.detail.cmp
    this.gridCmp.setData(new BasicGridComponentData(2000).data)
  }

}
