import './DialogPopupComponent.css';

export default class DialogPopupComponent {

  constructor () {
    console.log('in DialogPopupComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
