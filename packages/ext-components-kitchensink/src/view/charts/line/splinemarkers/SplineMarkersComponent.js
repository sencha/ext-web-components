import './SplineMarkersComponent.css';

export default class SplineMarkersComponent {

  constructor () {
    console.log('in SplineMarkersComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
