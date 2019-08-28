import Ext_Mask_Component from '../Ext/Mask';

export default class Ext_LoadMask_Component extends Ext_Mask_Component {
//events
//configs

static XTYPE() {return 'loadmask'}
static PROPERTIESOBJECT() { return {
"cls":["string"],
"indicator":["boolean"],
"message":["string"],
"messageCls":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'updateIndicator',function: function(newIndicator) { return this.ext.updateIndicator(newIndicator) } },
{ name:'updateMessage',function: function(newMessage) { return this.ext.updateMessage(newMessage) } },
{ name:'updateMessageCls',function: function(newMessageCls,oldMessageCls) { return this.ext.updateMessageCls(newMessageCls,oldMessageCls) } },
]}

constructor() {
    super (
        Ext_LoadMask_Component.METHODS(),
        Ext_LoadMask_Component.XTYPE(),
        Ext_LoadMask_Component.PROPERTIESOBJECT(),
        Ext_LoadMask_Component.EVENTS()
    )
    this.XTYPE = Ext_LoadMask_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_LoadMask_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_LoadMask_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_LoadMask_Component.EVENTS());
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
    window.customElements.define('ext-loadmask', Ext_LoadMask_Component);
  });
})();

