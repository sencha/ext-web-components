import './FormPanelComponent.css';

export default class FormPanelComponent {

  constructor () {
    console.log('in FormPanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
