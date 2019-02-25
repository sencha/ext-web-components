import './DataChangesComponent.css';

export default class DataChangesComponent {

  constructor () {
    console.log('in DataChangesComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
