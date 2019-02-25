import './SalesPerEmployeeComponent.css';

export default class SalesPerEmployeeComponent {

  constructor () {
    console.log('in SalesPerEmployeeComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
