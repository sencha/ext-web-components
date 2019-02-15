class ExtContainer extends ExtBase {

  get html() {return this.getAttribute('html')}; set html(val) {if (val) {this.setAttribute('html', val)} else {this.removeAttribute('html')}}
  get margin() {return this.getAttribute('margin')}; set margin(val) {if (val) {this.setAttribute('margin', val)} else {this.removeAttribute('margin')}}

  constructor() {
    super();
    this.xtype = 'container'
  }

  connectedCallback() {
    var o = {
      xtype: this.xtype,
      html: this.html,
      margin: this.margin
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
