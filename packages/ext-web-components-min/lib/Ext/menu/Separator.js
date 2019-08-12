import Ext_Component_Component from '../../Ext/Component';

export default class Ext_menu_Separator_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'menuseparator'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_menu_Separator_Component.METHODS(),
        Ext_menu_Separator_Component.XTYPE(),
        Ext_menu_Separator_Component.PROPERTIESOBJECT(),
        Ext_menu_Separator_Component.EVENTS()
    )
    this.XTYPE = Ext_menu_Separator_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_Separator_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_menu_Separator_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_menu_Separator_Component.EVENTS());
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
    window.customElements.define('ext-menuseparator', Ext_menu_Separator_Component);
  });
})();

