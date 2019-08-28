import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_grid_locked_Region_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'lockedgridregion'}
static PROPERTIESOBJECT() { return {
"grid":["Ext.grid.Grid"],
"locked":["boolean","string"],
"menuItem":["string"],
"regionKey":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_locked_Region_Component.METHODS(),
        Ext_grid_locked_Region_Component.XTYPE(),
        Ext_grid_locked_Region_Component.PROPERTIESOBJECT(),
        Ext_grid_locked_Region_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_locked_Region_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_locked_Region_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_locked_Region_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_locked_Region_Component.EVENTS());
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
    window.customElements.define('ext-lockedgridregion', Ext_grid_locked_Region_Component);
  });
})();

