import './RippleComponent.css';
import './RippleComponent.html';

export default class RippleComponent {

  constructor() {
    console.log('in RippleComponent constructor');
  }
  containerReady(event) {
    this.container = event.detail.cmp;
    this.container.setDefaults({
      handler: this.clickHandler.bind(this),
    })
  }

  clickHandler(event) {
    Ext.get(event.target).ripple(event, {})
  }

}
