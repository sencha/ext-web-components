import './BasicLineComponent.css';

export default class BasicLineComponent {

  constructor () {
    console.log('in BasicLineComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
