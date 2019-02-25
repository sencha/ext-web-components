import './GroupedGridComponent.css';

export default class GroupedGridComponent {

  constructor () {
    console.log('in GroupedGridComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
