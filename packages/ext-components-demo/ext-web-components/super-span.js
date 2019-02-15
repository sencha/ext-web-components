class SuperSpan extends HTMLElement {

  constructor(...args) {
    //super();
    const self = super(...args);
    var shadow = self.attachShadow({mode: 'open'});
    var wrapper = document.createElement('span');
    wrapper.textContent = 'the text';
    shadow.appendChild(wrapper);
    return self;
  }

  connectedCallback() {
//    super.connectedCallback()
    console.log(this.isConnected);
  }

}