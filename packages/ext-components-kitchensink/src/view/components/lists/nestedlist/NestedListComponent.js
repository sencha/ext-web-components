import './NestedListComponent.css';

export default class NestedListComponent {

  constructor () {
    console.log('in NestedListComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
