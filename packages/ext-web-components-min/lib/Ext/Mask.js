import Ext_Component_Component from '../Ext/Component';

export default class Ext_Mask_Component extends Ext_Component_Component {
//events
get ontap(){return this.getAttribute('ontap')};set ontap(ontap){this.setAttribute('ontap',ontap)}
//configs

static XTYPE() {return 'mask'}
static PROPERTIESOBJECT() { return {
"bottom":["any"],
"left":["any"],
"right":["any"],
"top":["any"],
"transparent":["boolean"],
}}
static EVENTS() { return [
{name:'tap',parameters:'undefined,e'},
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_Mask_Component.METHODS(),
        Ext_Mask_Component.XTYPE(),
        Ext_Mask_Component.PROPERTIESOBJECT(),
        Ext_Mask_Component.EVENTS()
    )
    this.XTYPE = Ext_Mask_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Mask_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_Mask_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_Mask_Component.EVENTS());
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
    window.customElements.define('ext-mask', Ext_Mask_Component);
  });
})();

