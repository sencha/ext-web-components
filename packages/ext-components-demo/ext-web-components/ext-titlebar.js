class ExtTitlebar extends ExtBase {

  get docked() {return this.getAttribute('docked')}; set docked(val) {if (val) {this.setAttribute('docked', val)} else {this.removeAttribute('docked')}}

  constructor() {
    super();
    this.xtype = 'titlebar'
  }

  connectedCallback() {
    var o = {
      xtype: this.xtype,
      docked: this.docked
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
