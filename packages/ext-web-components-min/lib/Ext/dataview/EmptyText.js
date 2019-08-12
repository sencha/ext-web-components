import Ext_Component_Component from '../../Ext/Component';

export default class Ext_dataview_EmptyText_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'emptytext'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_dataview_EmptyText_Component.METHODS(),
        Ext_dataview_EmptyText_Component.XTYPE(),
        Ext_dataview_EmptyText_Component.PROPERTIESOBJECT(),
        Ext_dataview_EmptyText_Component.EVENTS()
    )
    this.XTYPE = Ext_dataview_EmptyText_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_EmptyText_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_dataview_EmptyText_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_EmptyText_Component.EVENTS());
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
    window.customElements.define('ext-emptytext', Ext_dataview_EmptyText_Component);
  });
})();

