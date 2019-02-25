import './ClosableTabComponent.css';

export default class ClosableTabComponent {

  constructor () {
    console.log('in ClosableTabComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
