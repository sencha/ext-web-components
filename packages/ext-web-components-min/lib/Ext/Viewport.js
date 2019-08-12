import Ext_viewport_Default_Component from '../Ext/viewport/Default';

export default class Ext_Viewport_Component extends Ext_viewport_Default_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_Viewport_Component.METHODS(),
        Ext_Viewport_Component.XTYPE(),
        Ext_Viewport_Component.PROPERTIESOBJECT(),
        Ext_Viewport_Component.EVENTS()
    )
    this.XTYPE = Ext_Viewport_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Viewport_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Viewport_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Viewport_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

