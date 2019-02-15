class ExtToolbar extends ExtBase {

  get docked() {return this.getAttribute('docked')}; set docked(val) {if (val) {this.setAttribute('docked', val)} else {this.removeAttribute('docked')}}
  get layout() {return this.getAttribute('layout')}; set layout(val) {if (val) {this.setAttribute('layout', val)} else {this.removeAttribute('layout')}}

	static XTYPE() {return 'toolbar'}
  static PROPERTIESOBJECT() { return {
    "docked": "String",
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
    this.METHODS = ExtToolbar.METHODS()
		this.XTYPE = ExtToolbar.XTYPE()
		//this.PROPERTIES = ExtToolbar.PROPERTIES()
    this.PROPERTIESOBJECT = ExtToolbar.PROPERTIESOBJECT()
		this.EVENTS = ExtToolbar.EVENTS()
  }

  // connectedCallback() {
  //   var o = {
  //     xtype: this.xtype,
  //     docked: this.docked,
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
