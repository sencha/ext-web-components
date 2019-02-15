(function () {
class ExtPanel extends ExtBase {

  get title() {return this.getAttribute('title')}; set title(val) {if (val) {this.setAttribute('title', val)} else {this.removeAttribute('title')}}
  //get margin() {return this.getAttribute('margin')}; set margin(val) {if (val) {this.setAttribute('margin', val)} else {this.removeAttribute('margin')}}
  get layout() {return this.getAttribute('layout')}; set layout(val) {if (val) {this.setAttribute('layout', val)} else {this.removeAttribute('layout')}}

  constructor() {
    super();
    this.xtype = 'panel'
  }

  connectedCallback() {
    var o = {
      xtype: this.xtype,
      title: this.title,
      bodyPadding: '10',
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
window.customElements.define('ext-panel', ExtPanel)
})();