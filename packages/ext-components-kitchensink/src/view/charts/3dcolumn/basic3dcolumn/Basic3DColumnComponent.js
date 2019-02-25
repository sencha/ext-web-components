import './Basic3DColumnComponent.css';

export default class Basic3DColumnComponent {

  constructor () {
    console.log('in Basic3DColumnComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
