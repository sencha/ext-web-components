const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: block;
      contain: content;
      text-align: center;
      background: papayawhip;
      max-width: 500px;
      margin: 0 auto;
      box-shadow: 0 0 10px rgba(128, 100, 38, 0.34);
      border-radius: 8px;
      border: 2px dashed #ccc049;
    }
  </style>

  <slot></slot>
`;

class ExtComponent extends ExtBase {

constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  this.shadowRoot.appendChild(template.content.cloneNode(true));
}

connectedCallback() {
  super.connectedCallback()
  console.log(this)
}

disconnectedCallback() {
  console.log('disconnectedCallback')
}

attributeChangedCallback(attrName, oldVal, newVal) {
  console.log('attributeChangedCallback')
}

adoptedCallback() {
  console.log('adoptedCallback')
}

}

