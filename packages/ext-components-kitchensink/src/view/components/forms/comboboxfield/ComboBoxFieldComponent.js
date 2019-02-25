import './ComboBoxFieldComponent.css';

export default class ComboBoxFieldComponent {

  constructor () {
    console.log('in ComboBoxFieldComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
