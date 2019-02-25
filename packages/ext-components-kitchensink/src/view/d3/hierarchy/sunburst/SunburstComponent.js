import './SunburstComponent.css';

export default class SunburstComponent {

  constructor () {
    console.log('in SunburstComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
