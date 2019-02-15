class ExtButton extends ExtBase {

  get text() {return this.getAttribute('text')}; set text(val) {if (val) {this.setAttribute('text', val)} else {this.removeAttribute('text')}}

  constructor() {
    super();
    this.xtype = 'button'
  }

  connectedCallback() {
    var o = {
      xtype: this.xtype,
      text: this.text
    }
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
