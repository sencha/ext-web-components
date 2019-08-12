import Ext_Component_Component from '../Ext/Component';

export default class Ext_Tool_Component extends Ext_Component_Component {
//events
get onclick(){return this.getAttribute('onclick')};set onclick(onclick){this.setAttribute('onclick',onclick)}
//configs

static XTYPE() {return 'tool'}
static PROPERTIESOBJECT() { return {
"handler":["function","string"],
"iconCls":["string"],
"passive":["boolean"],
"scope":["object"],
"stopEvent":["boolean"],
"toolOwner":["Ext.Component"],
"type":["string"],
}}
static EVENTS() { return [
{name:'click',parameters:'undefined,e,owner'},
]}
static METHODS() { return [
{ name:'onClick',function: function(ev) { return this.ext.onClick(ev) } },
{ name:'onMouseDown',function: function(e) { return this.ext.onMouseDown(e) } },
{ name:'onMouseOut',function: function() { return this.ext.onMouseOut() } },
{ name:'onMouseOver',function: function() { return this.ext.onMouseOver() } },
{ name:'onRelease',function: function() { return this.ext.onRelease() } },
]}

constructor() {
    super (
        Ext_Tool_Component.METHODS(),
        Ext_Tool_Component.XTYPE(),
        Ext_Tool_Component.PROPERTIESOBJECT(),
        Ext_Tool_Component.EVENTS()
    )
    this.XTYPE = Ext_Tool_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Tool_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Tool_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Tool_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-tool', Ext_Tool_Component);
  });
})();

