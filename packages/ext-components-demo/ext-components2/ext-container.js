class ExtContainer extends ExtBase {

  get html() {return this.getAttribute('html')}; set html(val) {if (val) {this.setAttribute('html', val)} else {this.removeAttribute('html')}}
  get margin() {return this.getAttribute('margin')}; set margin(val) {if (val) {this.setAttribute('margin', val)} else {this.removeAttribute('margin')}}

	static XTYPE() {return 'container'}
  static PROPERTIESOBJECT() { return {
    "html": "String",
    "margin": "String",
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
    this.METHODS = ExtContainer.METHODS()
		this.XTYPE = ExtContainer.XTYPE()
		//this.PROPERTIES = ExtContainer.PROPERTIES()
    this.PROPERTIESOBJECT = ExtContainer.PROPERTIESOBJECT()
		this.EVENTS = ExtContainer.EVENTS()
  }

  // connectedCallback() {
  //   var o = {
  //     xtype: this.xtype,
  //     html: this.html,
  //     margin: this.margin
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
