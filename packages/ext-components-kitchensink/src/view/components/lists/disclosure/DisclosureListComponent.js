import './DisclosureListComponent.css';

export default class DisclosureListComponent {

  constructor () {
    console.log('in DisclosureListComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
