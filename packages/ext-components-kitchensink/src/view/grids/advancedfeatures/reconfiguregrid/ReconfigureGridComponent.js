import './ReconfigureGridComponent.css';

export default class ReconfigureGridComponent {

  constructor () {
    console.log('in ReconfigureGridComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
