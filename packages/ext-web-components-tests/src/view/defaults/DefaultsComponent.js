import "./DefaultsComponent.html";

export default class DefaultsComponent {
  constructor() {}

  containerReady = (event) => {
    const parentContainer = event.detail.cmp;
    parentContainer.setDefaults({ text: 'Button123' });
  }
}
