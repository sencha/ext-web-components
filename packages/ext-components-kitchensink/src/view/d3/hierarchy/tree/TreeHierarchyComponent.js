import './TreeHierarchyComponent.css';

export default class TreeHierarchyComponent {

  constructor () {
    console.log('in TreeHierarchyComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
