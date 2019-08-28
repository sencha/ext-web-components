import Ext_MessageBox_Component from '../Ext/MessageBox';

export default class Ext_Msg_Component extends Ext_MessageBox_Component {
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
        Ext_Msg_Component.METHODS(),
        Ext_Msg_Component.XTYPE(),
        Ext_Msg_Component.PROPERTIESOBJECT(),
        Ext_Msg_Component.EVENTS()
    )
    this.XTYPE = Ext_Msg_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Msg_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Msg_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Msg_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

