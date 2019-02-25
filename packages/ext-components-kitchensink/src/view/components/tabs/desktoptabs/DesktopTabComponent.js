import './DesktopTabComponent.css';

export default class DesktopTabComponent {

  constructor () {
    console.log('in DesktopTabComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
