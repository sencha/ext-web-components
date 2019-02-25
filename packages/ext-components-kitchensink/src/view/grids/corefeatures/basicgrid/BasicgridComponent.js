import './BasicGridComponent.css';

export default class BasicGridComponent {

  constructor () {
    console.log('in BasicGridComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
