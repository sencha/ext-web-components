import './BasicScatterComponent.css';

export default class BasicScatterComponent {

  constructor () {
    console.log('in BasicScatterComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
