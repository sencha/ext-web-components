import "./BasicEventComponent.html";

export default class BasicEventComponent {
  constructor() {}

  onButtonTap(evt) {
    this.container.setHtml('Tapped');
    evt.currentTarget.text = 'Tapped';
  }

  containerReady() {
    this.container = event.detail.cmp
  }
}
