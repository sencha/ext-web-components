import './AdvancedDatePanelComponent.css';

export default class AdvancedDatePanelComponent {

  constructor () {
    console.log('in AdvancedDatePanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
