import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_grid_rowedit_Bar_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'roweditorbar'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_rowedit_Bar_Component.METHODS(),
        Ext_grid_rowedit_Bar_Component.XTYPE(),
        Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT(),
        Ext_grid_rowedit_Bar_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_rowedit_Bar_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_rowedit_Bar_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_rowedit_Bar_Component.EVENTS());
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
    window.customElements.define('ext-roweditorbar', Ext_grid_rowedit_Bar_Component);
  });
})();

