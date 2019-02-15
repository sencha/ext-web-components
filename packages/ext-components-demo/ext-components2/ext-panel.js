(function () {
class ExtPanel extends ExtBase {

  get title() {return this.getAttribute('title')}; set title(val) {if (val) {this.setAttribute('title', val)} else {this.removeAttribute('title')}}
  get layout() {return this.getAttribute('layout')}; set layout(val) {if (val) {this.setAttribute('layout', val)} else {this.removeAttribute('layout')}}

	static XTYPE() {return 'panel'}
  static PROPERTIESOBJECT() { return {
    "title": "String",
    "layout": "String",
	}}
	static EVENTS() { return [
		{name:'added',parameters:'sender,container,index'},
	]}
  static METHODS() { return [
		{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
	]}
  constructor() {
    super();
    //this.xtype = 'button'
    this.METHODS = ExtPanel.METHODS()
		this.XTYPE = ExtPanel.XTYPE()
		//this.PROPERTIES = ExtPanel.PROPERTIES()
    this.PROPERTIESOBJECT = ExtPanel.PROPERTIESOBJECT()
		this.EVENTS = ExtPanel.EVENTS()
  }

  // connectedCallback() {
  //   var o = {
  //     xtype: this.xtype,
  //     title: this.title,
  //     bodyPadding: '10',
  //     layout: this.layout
  //   }
  //   super.connectedCallback(o)
  // }
  connectedCallback() {
    super.connectedCallback()
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
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