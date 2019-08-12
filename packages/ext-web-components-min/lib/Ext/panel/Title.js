import Ext_Component_Component from '../../Ext/Component';

export default class Ext_panel_Title_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'paneltitle'}
static PROPERTIESOBJECT() { return {
"glyph":["number","string"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"rotateIcon":["boolean"],
"rotation":["'90'","'270'","'0'"],
"text":["string"],
"textAlign":["'left'","'center'","'right'"],
"weight":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_panel_Title_Component.METHODS(),
        Ext_panel_Title_Component.XTYPE(),
        Ext_panel_Title_Component.PROPERTIESOBJECT(),
        Ext_panel_Title_Component.EVENTS()
    )
    this.XTYPE = Ext_panel_Title_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Title_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_panel_Title_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_Title_Component.EVENTS());
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
    window.customElements.define('ext-paneltitle', Ext_panel_Title_Component);
  });
})();

