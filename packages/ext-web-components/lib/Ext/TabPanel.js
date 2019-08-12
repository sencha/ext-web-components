import Ext_Container_Component from '../Ext/Container';

export default class Ext_TabPanel_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'tabpanel'}
static PROPERTIESOBJECT() { return {
"autoOrientAnimation":["boolean"],
"cls":["string","string[]"],
"layout":["object","string"],
"scroll":["boolean","string","object"],
"scrollable":["boolean","string","object"],
"tabBar":["object"],
"tabBarPosition":["string"],
"tabRotation":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyScrollable',function: function() { return this.ext.applyScrollable() } },
{ name:'applyTabBar',function: function(config) { return this.ext.applyTabBar(config) } },
{ name:'doTabChange',function: function(tabBar,newTab) { return this.ext.doTabChange(tabBar,newTab) } },
{ name:'onItemDisabledChange',function: function(item,newDisabled) { return this.ext.onItemDisabledChange(item,newDisabled) } },
{ name:'updateActiveItem',function: function(newActiveItem,oldActiveItem) { return this.ext.updateActiveItem(newActiveItem,oldActiveItem) } },
{ name:'updateTabBar',function: function(tabBar,oldTabBar) { return this.ext.updateTabBar(tabBar,oldTabBar) } },
{ name:'updateTabBarPosition',function: function(position) { return this.ext.updateTabBarPosition(position) } },
{ name:'updateUi',function: function(ui,oldUi) { return this.ext.updateUi(ui,oldUi) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_TabPanel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_TabPanel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_TabPanel_Component.METHODS(),
            Ext_TabPanel_Component.XTYPE(),
            Ext_TabPanel_Component.PROPERTIESOBJECT(),
            Ext_TabPanel_Component.EVENTS()
        )
        this.XTYPE = Ext_TabPanel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_TabPanel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_TabPanel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_TabPanel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
