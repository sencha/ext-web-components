import './ButtonComponent.scss';
import './ButtonComponent.html';

export default class ButtonComponent {

  constructor () {
    console.log('in ButtonComponent constructor');
  }

  sayHello(button, e) {
    console.log(button)
  }

  readyButton(event) {
    console.log('in ready event')
//    this.ButtonHorizontalCmp = event.detail.cmp
//    this.ButtonHorizontalCmp.setActiveItem(0)
  }

}
