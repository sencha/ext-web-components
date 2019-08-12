import Ext_menu_CheckItem_Component from '../../../Ext/menu/CheckItem';

export default class Ext_grid_menu_ShowInGroups_Component extends Ext_menu_CheckItem_Component {
//events
//configs

static XTYPE() {return 'gridshowingroupsmenuitem'}
static PROPERTIESOBJECT() { return {
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_menu_ShowInGroups_Component.METHODS(),
        Ext_grid_menu_ShowInGroups_Component.XTYPE(),
        Ext_grid_menu_ShowInGroups_Component.PROPERTIESOBJECT(),
        Ext_grid_menu_ShowInGroups_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_menu_ShowInGroups_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_menu_ShowInGroups_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_menu_ShowInGroups_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_menu_ShowInGroups_Component.EVENTS());
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
    window.customElements.define('ext-gridshowingroupsmenuitem', Ext_grid_menu_ShowInGroups_Component);
  });
})();

