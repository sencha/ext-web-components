import './ThreeDPieComponent.css';

export default class ThreeDPieComponent {

  constructor () {
    console.log('in ThreeDPieComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
