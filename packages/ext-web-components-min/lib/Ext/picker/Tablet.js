import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_picker_Tablet_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'tabletpicker'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_picker_Tablet_Component.METHODS(),
        Ext_picker_Tablet_Component.XTYPE(),
        Ext_picker_Tablet_Component.PROPERTIESOBJECT(),
        Ext_picker_Tablet_Component.EVENTS()
    )
    this.XTYPE = Ext_picker_Tablet_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_Tablet_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_picker_Tablet_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_picker_Tablet_Component.EVENTS());
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
    window.customElements.define('ext-tabletpicker', Ext_picker_Tablet_Component);
  });
})();

