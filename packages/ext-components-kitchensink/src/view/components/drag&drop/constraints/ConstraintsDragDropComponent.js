import './ConstraintsDragDropComponent.css';

export default class ConstraintsDragDropComponent {

  constructor () {
    console.log('in ConstraintsDragDropComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
