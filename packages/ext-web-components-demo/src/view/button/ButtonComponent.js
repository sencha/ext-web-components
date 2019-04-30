import './ButtonComponent.scss';
import './ButtonComponent.html';

export default class ButtonComponent {

  constructor () {
    this.counter1 = 0;
    this.counter2 = 0;
  };

  buttonReady1 = event => {
    console.log('buttonReady1')
    this.buttonComp1 = event.detail.cmp;
    this.button1 = event.target
  };

  buttonReady2 = event => {
    console.log('buttonReady2')
    this.buttonComp2 = event.detail.cmp;
  };

  onTap = event => {
    this.counter1++;
    this.button1.text = this.counter1 + ' (target)'
  };

  handler = event => {
    this.counter2++;
    this.buttonComp2.setText(this.counter2 + ' (cmp)');
  };

}
