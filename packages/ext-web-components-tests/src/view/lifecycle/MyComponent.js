export default class MyComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const extContainer = document.createElement('ext-container');
    extContainer.setAttribute('html', 'I am Ext Container.');
    this.id="my-component-id";
    this.appendChild(extContainer);
  }

  disconnectedCallback() {
    console.log('Removed');
  }
}

window.customElements.define('my-component', MyComponent);
