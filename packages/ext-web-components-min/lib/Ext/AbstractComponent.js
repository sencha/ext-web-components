import Ext_Widget_Component from '../Ext/Widget';

export default class Ext_AbstractComponent_Component extends Ext_Widget_Component {
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
        Ext_AbstractComponent_Component.METHODS(),
        Ext_AbstractComponent_Component.XTYPE(),
        Ext_AbstractComponent_Component.PROPERTIESOBJECT(),
        Ext_AbstractComponent_Component.EVENTS()
    )
    this.XTYPE = Ext_AbstractComponent_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_AbstractComponent_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_AbstractComponent_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_AbstractComponent_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

