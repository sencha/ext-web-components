class ExtTitlebar extends ExtBase {

  get docked() {return this.getAttribute('docked')}; set docked(val) {if (val) {this.setAttribute('docked', val)} else {this.removeAttribute('docked')}}

	static XTYPE() {return 'titlebar'}
  static PROPERTIESOBJECT() { return {
    "docked": "String",
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
    this.METHODS = ExtTitlebar.METHODS()
		this.XTYPE = ExtTitlebar.XTYPE()
		//this.PROPERTIES = ExtTitlebar.PROPERTIES()
    this.PROPERTIESOBJECT = ExtTitlebar.PROPERTIESOBJECT()
		this.EVENTS = ExtTitlebar.EVENTS()
  }

  // connectedCallback() {
  //   var o = {
  //     xtype: this.xtype,
  //     docked: this.docked
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
