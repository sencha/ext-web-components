import './BasicPieComponent.css';

export default class BasicPieComponent {

  constructor () {
    console.log('in BasicPieComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
