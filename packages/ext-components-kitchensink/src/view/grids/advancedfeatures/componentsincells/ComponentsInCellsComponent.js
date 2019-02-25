import './ComponentsInCellsComponent.css';

export default class ComponentsInCellsComponent {

  constructor () {
    console.log('in ComponentsInCellsComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
