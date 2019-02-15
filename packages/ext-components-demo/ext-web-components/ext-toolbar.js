class ExtToolbar extends ExtBase {

  get docked() {return this.getAttribute('docked')}; set docked(val) {if (val) {this.setAttribute('docked', val)} else {this.removeAttribute('docked')}}
  get layout() {return this.getAttribute('layout')}; set layout(val) {if (val) {this.setAttribute('layout', val)} else {this.removeAttribute('layout')}}

  constructor() {
    super();
    this.xtype = 'toolbar'
  }

  connectedCallback() {
    var o = {
      xtype: this.xtype,
      docked: this.docked,
      layout: this.layout
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
