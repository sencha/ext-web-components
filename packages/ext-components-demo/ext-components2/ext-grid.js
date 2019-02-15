class ExtGrid extends ExtBase {

  get config() {return this.getAttribute('config')}; set config(val) {if (val) {this.setAttribute('config', val)} else {this.removeAttribute('config')}}

	static XTYPE() {return 'grid'}
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
    this.METHODS = ExtGrid.METHODS()
		this.XTYPE = ExtGrid.XTYPE()
		//this.PROPERTIES = ExtGrid.PROPERTIES()
    this.PROPERTIESOBJECT = ExtGrid.PROPERTIESOBJECT()
		this.EVENTS = ExtGrid.EVENTS()
  }

  // connectedCallback() {
  //   // var o = {
  //   //   xtype: this.xtype,
  //   //   text: this.text
  //   // }
  //   // super.connectedCallback(o)
  //   // super.connectedCallback()
  //   // console.log('grid')
  //   // console.log(this.isConnected);
  //   // //var o = JSON.parse(this.config)

  //   var o = JSON.parse(this.config)
  //   o.xtype = 'grid'
  //     // xtype: 'grid',
  //     // text: this.config
  //     // "title":"Grid with a single config",
  //     // "columns": [
  //     //   {"text": "Name", "width": "250", "dataIndex": "name"},
  //     //   {"text": "Email Address", "flex": "1", "dataIndex": "email"},
  //     //   {"text": "Phone Number", "width": "250", "dataIndex": "phone"}
  //     // ],
  //     // "data": [
  //     //   {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
  //     //   {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
  //     //   {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
  //     //   {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
  //     // ]
  //   //}
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
