import './BasicRadarComponent.css';

export default class BasicRadarComponent {

  constructor () {
    console.log('in BasicRadarComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
