import './TitleBarComponent.css';

export default class TitleBarComponent {

  constructor () {
    console.log('in TitleBarComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
