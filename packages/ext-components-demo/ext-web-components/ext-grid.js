class ExtGrid extends ExtBase {

  get config() {return this.getAttribute('config')}; set config(val) {if (val) {this.setAttribute('config', val)} else {this.removeAttribute('config')}}

  constructor() {
    super();
  }

  connectedCallback() {
    // var o = {
    //   xtype: this.xtype,
    //   text: this.text
    // }
    // super.connectedCallback(o)
    // super.connectedCallback()
    // console.log('grid')
    // console.log(this.isConnected);
    // //var o = JSON.parse(this.config)

    var o = JSON.parse(this.config)
    o.xtype = 'grid'
      // xtype: 'grid',
      // text: this.config
      // "title":"Grid with a single config",
      // "columns": [
      //   {"text": "Name", "width": "250", "dataIndex": "name"},
      //   {"text": "Email Address", "flex": "1", "dataIndex": "email"},
      //   {"text": "Phone Number", "width": "250", "dataIndex": "phone"}
      // ],
      // "data": [
      //   {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
      //   {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
      //   {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
      //   {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
      // ]
    //}
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
