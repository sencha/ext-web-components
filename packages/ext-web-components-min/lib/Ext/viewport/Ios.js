import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

export default class Ext_viewport_Ios_Component extends Ext_viewport_Default_Component {
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
        Ext_viewport_Ios_Component.METHODS(),
        Ext_viewport_Ios_Component.XTYPE(),
        Ext_viewport_Ios_Component.PROPERTIESOBJECT(),
        Ext_viewport_Ios_Component.EVENTS()
    )
    this.XTYPE = Ext_viewport_Ios_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_Ios_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_viewport_Ios_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_viewport_Ios_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

