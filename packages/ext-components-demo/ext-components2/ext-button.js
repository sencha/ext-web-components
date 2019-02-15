(function () {
class ExtButton extends ExtBase {

  get text() {return this.getAttribute('text')}; set text(val) {if (val) {this.setAttribute('text', val)} else {this.removeAttribute('text')}}

	static XTYPE() {return 'button'}
  static PROPERTIESOBJECT() { return {
    "text": "String",
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
    this.METHODS = ExtButton.METHODS()
		this.XTYPE = ExtButton.XTYPE()
		//this.PROPERTIES = ExtButton.PROPERTIES()
    this.PROPERTIESOBJECT = ExtButton.PROPERTIESOBJECT()
		this.EVENTS = ExtButton.EVENTS()
  }

  // connectedCallback() {
  //   var o = {
  //     xtype: this.xtype,
  //     text: this.text
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



  adoptedCallback() {
    console.log('adoptedCallback')
  }

}
window.customElements.define('ext-button', ExtButton);
})();