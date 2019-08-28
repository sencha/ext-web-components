import Ext_menu_RadioItem_Component from '../../../Ext/menu/RadioItem';

export default class Ext_grid_menu_SortDesc_Component extends Ext_menu_RadioItem_Component {
//events
//configs

static XTYPE() {return 'gridsortdescmenuitem'}
static PROPERTIESOBJECT() { return {
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_menu_SortDesc_Component.METHODS(),
        Ext_grid_menu_SortDesc_Component.XTYPE(),
        Ext_grid_menu_SortDesc_Component.PROPERTIESOBJECT(),
        Ext_grid_menu_SortDesc_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_menu_SortDesc_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_menu_SortDesc_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_menu_SortDesc_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_menu_SortDesc_Component.EVENTS());
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
    window.customElements.define('ext-gridsortdescmenuitem', Ext_grid_menu_SortDesc_Component);
  });
})();

