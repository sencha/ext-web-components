import Ext_Component_Component from '../../Ext/Component';

export default class Ext_menu_Item_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'menuitem'}
static PROPERTIESOBJECT() { return {
"clickHideDelay":["number"],
"destroyMenu":["boolean"],
"handler":["function","string"],
"hideOnClick":["boolean"],
"href":["string"],
"icon":["string"],
"iconAlign":["'left'","'right'"],
"iconCls":["string"],
"indented":["boolean"],
"menu":["Ext.menu.Menu","object"],
"menuAlign":["string"],
"menuExpandDelay":["number"],
"menuHideDelay":["number"],
"scope":["object"],
"separator":["boolean"],
"target":["string"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'expandMenu',function: function(event) { return this.ext.expandMenu(event) } },
{ name:'handleTouch',function: function() { return this.ext.handleTouch() } },
{ name:'hideParentMenus',function: function() { return this.ext.hideParentMenus() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_menu_Item_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_menu_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_menu_Item_Component.METHODS(),
            Ext_menu_Item_Component.XTYPE(),
            Ext_menu_Item_Component.PROPERTIESOBJECT(),
            Ext_menu_Item_Component.EVENTS()
        )
        this.XTYPE = Ext_menu_Item_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_Item_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_menu_Item_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_menu_Item_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
