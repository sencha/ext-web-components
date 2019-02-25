import './DoubleDonutComponent.css';

export default class DoubleDonutComponent {

  constructor () {
    console.log('in DoubleDonutComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
