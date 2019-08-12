import Ext_Toolbar_Component from '../Ext/Toolbar';

export default class Ext_TabBar_Component extends Ext_Toolbar_Component {
//events
get onactiveTabchange(){return this.getAttribute('onactiveTabchange')};set onactiveTabchange(onactiveTabchange){this.setAttribute('onactiveTabchange',onactiveTabchange)}
get onbeforeactiveTabchange(){return this.getAttribute('onbeforeactiveTabchange')};set onbeforeactiveTabchange(onbeforeactiveTabchange){this.setAttribute('onbeforeactiveTabchange',onbeforeactiveTabchange)}
get ontabchange(){return this.getAttribute('ontabchange')};set ontabchange(ontabchange){this.setAttribute('ontabchange',ontabchange)}
//configs

static XTYPE() {return 'tabbar'}
static PROPERTIESOBJECT() { return {
"activeTab":["number","string","Ext.Component"],
"animateIndicator":["boolean"],
"defaultTabUI":["string"],
"defaultType":["string"],
"layout":["object","string"],
"tabRotation":["string"],
}}
static EVENTS() { return [
{name:'activeTabchange',parameters:'sender,value,oldValue'},
{name:'beforeactiveTabchange',parameters:'sender,value,oldValue,undefined'},
{name:'tabchange',parameters:'undefined,newTab,oldTab'},
]}
static METHODS() { return [
{ name:'applyActiveTab',function: function(newActiveTab,oldActiveTab) { return this.ext.applyActiveTab(newActiveTab,oldActiveTab) } },
{ name:'closeTab',function: function(tab) { return this.ext.closeTab(tab) } },
{ name:'findNextActivatableTab',function: function(tabToClose) { return this.ext.findNextActivatableTab(tabToClose) } },
{ name:'getTabs',function: function() { return this.ext.getTabs() } },
{ name:'onTabTap',function: function(tab) { return this.ext.onTabTap(tab) } },
{ name:'parseActiveTab',function: function(tab) { return this.ext.parseActiveTab(tab) } },
{ name:'updateActiveTab',function: function(newTab,oldTab) { return this.ext.updateActiveTab(newTab,oldTab) } },
{ name:'updateDocked',function: function(newDocked) { return this.ext.updateDocked(newDocked) } },
{ name:'updateTabRotation',function: function(rotation) { return this.ext.updateTabRotation(rotation) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_TabBar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_TabBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_TabBar_Component.METHODS(),
            Ext_TabBar_Component.XTYPE(),
            Ext_TabBar_Component.PROPERTIESOBJECT(),
            Ext_TabBar_Component.EVENTS()
        )
        this.XTYPE = Ext_TabBar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_TabBar_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_TabBar_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_TabBar_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
