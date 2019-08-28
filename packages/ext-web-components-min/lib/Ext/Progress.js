import Ext_Gadget_Component from '../Ext/Gadget';

export default class Ext_Progress_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return 'progress'}
static PROPERTIESOBJECT() { return {
"animate":["boolean"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_Progress_Component.METHODS(),
        Ext_Progress_Component.XTYPE(),
        Ext_Progress_Component.PROPERTIESOBJECT(),
        Ext_Progress_Component.EVENTS()
    )
    this.XTYPE = Ext_Progress_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Progress_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Progress_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Progress_Component.EVENTS());
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
    window.customElements.define('ext-progress', Ext_Progress_Component);
  });
})();

