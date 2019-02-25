import './OutlineLayoutComponent.css';

export default class OutlineLayoutComponent {

  constructor () {
    console.log('in OutlineLayoutComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
