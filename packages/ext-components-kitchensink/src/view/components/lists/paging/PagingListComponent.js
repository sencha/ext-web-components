import './PagingListComponent.css';

export default class PagingListComponent {

  constructor () {
    console.log('in PagingListComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
