import './TabularLayoutComponent.css';

export default class TabularLayoutComponent {

  constructor () {
    console.log('in TabularLayoutComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
