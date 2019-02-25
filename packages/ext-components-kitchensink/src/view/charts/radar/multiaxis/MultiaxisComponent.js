import './MultiaxisComponent.css';

export default class MultiaxisComponent {

  constructor () {
    console.log('in MultiaxisComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
