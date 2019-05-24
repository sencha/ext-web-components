import './RippleComponent.html';
import './RippleComponent.scss';

export default class RippleComponent {
  containerReady = (event) => {
      this.containerCmp = event.detail.cmp;
      this.containerCmp.setDefaults({
          handler: this.clickHandler.bind(this),
      });
  }

  clickHandler = (event) => {
      Ext.get(event.target).ripple(event, {});
  }
}
