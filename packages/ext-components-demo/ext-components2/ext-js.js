class ExtJs extends ExtBase {

  get config() {return this.getAttribute('config')}; set config(val) {if (val) {this.setAttribute('config', val)} else {this.removeAttribute('config')}}

  constructor() {
    super();
  }

  connectedCallback() {
    var o = JSON.parse(this.config)
    super.connectedCallback(o)
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
