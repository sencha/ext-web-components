import Ext_scroll_indicator_Indicator_Component from '../../../Ext/scroll/indicator/Indicator';

export default class Ext_scroll_indicator_Bar_Component extends Ext_scroll_indicator_Indicator_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"stylesheet":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_scroll_indicator_Bar_Component.METHODS(),
        Ext_scroll_indicator_Bar_Component.XTYPE(),
        Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT(),
        Ext_scroll_indicator_Bar_Component.EVENTS()
    )
    this.XTYPE = Ext_scroll_indicator_Bar_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_scroll_indicator_Bar_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_scroll_indicator_Bar_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_scroll_indicator_Bar_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

