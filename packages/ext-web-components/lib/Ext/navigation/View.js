import Ext_Container_Component from '../../Ext/Container';

export default class Ext_navigation_View_Component extends Ext_Container_Component {
//events
get onback(){return this.getAttribute('onback')};set onback(onback){this.setAttribute('onback',onback)}
get onpop(){return this.getAttribute('onpop')};set onpop(onpop){this.setAttribute('onpop',onpop)}
get onpush(){return this.getAttribute('onpush')};set onpush(onpush){this.setAttribute('onpush',onpush)}
//configs

static XTYPE() {return 'navigationview'}
static PROPERTIESOBJECT() { return {
"defaultBackButtonText":["string"],
"items":["array","object"],
"layout":["object"],
"navigationBar":["boolean","object"],
"useTitleForBackButtonText":["boolean"],
}}
static EVENTS() { return [
{name:'back',parameters:'undefined'},
{name:'pop',parameters:'undefined,view'},
{name:'push',parameters:'undefined,view'},
]}
static METHODS() { return [
{ name:'applyActiveItem',function: function(activeItem,currentActiveItem) { return this.ext.applyActiveItem(activeItem,currentActiveItem) } },
{ name:'applyNavigationBar',function: function(config) { return this.ext.applyNavigationBar(config) } },
{ name:'beforePop',function: function(count) { return this.ext.beforePop(count) } },
{ name:'doPop',function: function() { return this.ext.doPop() } },
{ name:'doRemove',function: function() { return this.ext.doRemove() } },
{ name:'getPreviousItem',function: function() { return this.ext.getPreviousItem() } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'onBackButtonContainerAdd',function: function(toolbar,item) { return this.ext.onBackButtonContainerAdd(toolbar,item) } },
{ name:'onBackButtonContainerRemove',function: function(toolbar,item) { return this.ext.onBackButtonContainerRemove(toolbar,item) } },
{ name:'onBackButtonTap',function: function() { return this.ext.onBackButtonTap() } },
{ name:'onItemAdd',function: function(item,index) { return this.ext.onItemAdd(item,index) } },
{ name:'pop',function: function(count) { return this.ext.pop(count) } },
{ name:'push',function: function(view) { return this.ext.push(view) } },
{ name:'refreshBackButtonContainer',function: function() { return this.ext.refreshBackButtonContainer() } },
{ name:'reset',function: function() { return this.ext.reset() } },
{ name:'updateDefaultBackButtonText',function: function(defaultBackButtonText) { return this.ext.updateDefaultBackButtonText(defaultBackButtonText) } },
{ name:'updateNavigationBar',function: function(newNavigationBar,oldNavigationBar) { return this.ext.updateNavigationBar(newNavigationBar,oldNavigationBar) } },
{ name:'updateTitleContainerTitle',function: function(title) { return this.ext.updateTitleContainerTitle(title) } },
{ name:'updateUseTitleForBackButtonText',function: function(useTitleForBackButtonText) { return this.ext.updateUseTitleForBackButtonText(useTitleForBackButtonText) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_navigation_View_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_navigation_View_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_navigation_View_Component.METHODS(),
            Ext_navigation_View_Component.XTYPE(),
            Ext_navigation_View_Component.PROPERTIESOBJECT(),
            Ext_navigation_View_Component.EVENTS()
        )
        this.XTYPE = Ext_navigation_View_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_navigation_View_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_navigation_View_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_navigation_View_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
