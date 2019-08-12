import Ext_panel_Title_Component from '../../Ext/panel/Title';

export default class Ext_panel_DateTitle_Component extends Ext_panel_Title_Component {
//events
//configs

static XTYPE() {return 'datetitle'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_panel_DateTitle_Component.METHODS(),
        Ext_panel_DateTitle_Component.XTYPE(),
        Ext_panel_DateTitle_Component.PROPERTIESOBJECT(),
        Ext_panel_DateTitle_Component.EVENTS()
    )
    this.XTYPE = Ext_panel_DateTitle_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_DateTitle_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_panel_DateTitle_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_DateTitle_Component.EVENTS());
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
    window.customElements.define('ext-datetitle', Ext_panel_DateTitle_Component);
  });
})();

