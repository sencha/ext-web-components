import './hboxLayoutComponent.css';

export default class hboxLayoutComponent {

  constructor () {
    console.log('in hboxLayoutComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
