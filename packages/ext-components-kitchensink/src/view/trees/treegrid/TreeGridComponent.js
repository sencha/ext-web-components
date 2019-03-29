import './TreeGridComponent.html';
import data from "./data";

export default class TreeGridComponent {
  constructor () {}

  treeReady(event) {
    this.tree = event.detail.cmp;
    const isPhone = Ext.os.is.Phone;
    const top = !isPhone ? '10' : null
    const left = !isPhone ? '10' : null
    const width = !isPhone ? '400' : null
    const height = !isPhone ? '600' : null

    this.store = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: data
    })

    this.tree.setTop(top);
    this.tree.setLeft(left);
    this.tree.setWidth(width);
    this.tree.setHeight(height);
    this.tree.setStore(this.store);
  }
}
