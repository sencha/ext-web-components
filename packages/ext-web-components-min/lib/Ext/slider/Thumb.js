import Ext_Component_Component from '../../Ext/Component';

export default class Ext_slider_Thumb_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'thumb'}
static PROPERTIESOBJECT() { return {
"draggable":["boolean","object","Ext.drag.Source"],
"fillCls":["string"],
"fillTrack":["boolean","string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_slider_Thumb_Component.METHODS(),
        Ext_slider_Thumb_Component.XTYPE(),
        Ext_slider_Thumb_Component.PROPERTIESOBJECT(),
        Ext_slider_Thumb_Component.EVENTS()
    )
    this.XTYPE = Ext_slider_Thumb_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_slider_Thumb_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_slider_Thumb_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_slider_Thumb_Component.EVENTS());
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
    window.customElements.define('ext-thumb', Ext_slider_Thumb_Component);
  });
})();

