import './TreeDecorationsComponent.html';
import data from "./data";

export default class TreeDecorationsComponent {

  constructor () {}

  onTreeReady = (event) => {
    this.tree = event.detail.cmp;
    const isPhone = Ext.os.is.Phone;
    const width = !isPhone ? '400' : null
    const height = !isPhone ? '600' : null
  
    this.store = data;
    this.tree.setWidth(width);
    this.tree.setHeight(height);
    this.tree.setStore(this.store);
  }
}
