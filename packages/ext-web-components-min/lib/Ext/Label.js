import Ext_Component_Component from '../Ext/Component';

export default class Ext_Label_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'label'}
static PROPERTIESOBJECT() { return {
"html":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_Label_Component.METHODS(),
        Ext_Label_Component.XTYPE(),
        Ext_Label_Component.PROPERTIESOBJECT(),
        Ext_Label_Component.EVENTS()
    )
    this.XTYPE = Ext_Label_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Label_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Label_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Label_Component.EVENTS());
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
    window.customElements.define('ext-label', Ext_Label_Component);
  });
})();

