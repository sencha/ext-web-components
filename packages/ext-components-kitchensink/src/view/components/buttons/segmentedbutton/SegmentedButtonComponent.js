import './SegmentedButtonComponent.css';

export default class SegmentedButtonComponent {

  constructor () {
    console.log('in SegmentedButtonComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
