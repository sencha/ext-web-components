import './EditableTreeComponent.html';
import data from "./data";

export default class EditableTreeComponent {

  constructor () {}

  onTreeReady(event) {
    this.tree = event.detail.cmp;
    const isPhone = Ext.os.is.Phone;
    const top = !isPhone ? '10' : null
    const left = !isPhone ? '10' : null
    const width = !isPhone ? '600' : null
    const height = !isPhone ? '600' : null

    this.treeStore = data;

    this.tree.setTop(top);
    this.tree.setLeft(left);
    this.tree.setWidth(width);
    this.tree.setHeight(height);
    this.tree.setStore(this.treeStore);
  }
}
