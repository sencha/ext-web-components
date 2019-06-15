class ExtGrid extends HTMLElement {
  get title() {return this.getAttribute('title')}
  set title(val) {if (val) {this.setAttribute('title', val)} else {this.removeAttribute('title')}}

  get height() {return this.getAttribute('height')}
  set height(val) {if (val) {this.setAttribute('height', val)} else {this.removeAttribute('height')}}

  get columns() {return this.getAttribute('columns')}
  set columns(val) {if (val) {this.setAttribute('columns', val)} else {this.removeAttribute('columns')}}

  get data() {return this.getAttribute('data')}
  set data(val) {if (val) {this.setAttribute('data', val)} else {this.removeAttribute('data')}}

  connectedCallback() {
    var o = {}
    o.title = this.title
    o.height = this.height
    o.columns = JSON.parse(this.columns)
    o.data = JSON.parse(this.data)
    o.renderTo = this
    var xtype = 'grid'
    var extJSClass = Ext.ClassManager.getByAlias(`widget.${xtype}`)
    this.ext = new extJSClass(o)
  }
}
window.customElements.define('ext-grid', ExtGrid)
