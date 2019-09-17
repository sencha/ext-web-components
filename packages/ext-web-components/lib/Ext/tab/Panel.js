import Ext_Container_Component from '../../Ext/Container';

export default class Ext_tab_Panel_Component extends Ext_Container_Component {
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
        for (var property in Ext_tab_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_tab_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_tab_Panel_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_tab_Panel_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_tab_Panel_Component.METHODS()),
            events.concat(Ext_tab_Panel_Component.EVENTS())



            //events.concat(Ext_tab_Panel_Component.EVENTS()),
            //propertiesobject.concat(Ext_tab_Panel_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_tab_Panel_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_tab_Panel_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_tab_Panel_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_tab_Panel_Component.METHODS())
        )
        //this.XTYPE = Ext_tab_Panel_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_tab_Panel_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_tab_Panel_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_tab_Panel_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
