import Ext_menu_CheckItem_Component from '../../Ext/menu/CheckItem';

export default class Ext_menu_RadioItem_Component extends Ext_menu_CheckItem_Component {
//events
//configs

static XTYPE() {return 'menuradioitem'}
static PROPERTIESOBJECT() { return {
"allowUncheck":["boolean"],
"group":["string"],
"name":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_menu_RadioItem_Component.METHODS(),
        Ext_menu_RadioItem_Component.XTYPE(),
        Ext_menu_RadioItem_Component.PROPERTIESOBJECT(),
        Ext_menu_RadioItem_Component.EVENTS()
    )
    this.XTYPE = Ext_menu_RadioItem_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_RadioItem_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_menu_RadioItem_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_menu_RadioItem_Component.EVENTS());
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
    window.customElements.define('ext-menuradioitem', Ext_menu_RadioItem_Component);
  });
})();

