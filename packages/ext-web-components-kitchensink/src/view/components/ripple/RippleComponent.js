import './RippleComponent.html';
import './RippleComponent.scss';

export default class RippleComponent {
  containerReady = (event) => {
      this.container = event.detail.cmp;
      this.container.setDefaults({
          handler: this.clickHandler.bind(this),
      });
  }

  clickHandler = (event) => {
      Ext.get(event.target).ripple(event, {});
  }
}
