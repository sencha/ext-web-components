import Ext_TitleBar_Component from '../../Ext/TitleBar';

export default class Ext_navigation_Bar_Component extends Ext_TitleBar_Component {
//events
get onback(){return this.getAttribute('onback')};set onback(onback){this.setAttribute('onback',onback)}
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"android2Transforms":["boolean"],
"animation":["object"],
"backButton":["Ext.Button","object"],
"cls":["string","string[]"],
"defaultBackButtonText":["string"],
"defaultType":["any"],
"items":["array","object"],
"layout":["any"],
"title":["string"],
"ui":["string"],
"useTitleForBackButtonText":["boolean"],
"view":["Ext.navigation.View"],
}}
static EVENTS() { return [
{name:'back',parameters:'undefined'},
]}
static METHODS() { return [
{ name:'animate',function: function(element,config,callback) { return this.ext.animate(element,config,callback) } },
{ name:'applyBackButton',function: function(config) { return this.ext.applyBackButton(config) } },
{ name:'beforePop',function: function(count) { return this.ext.beforePop(count) } },
{ name:'createProxy',function: function(element) { return this.ext.createProxy(element) } },
{ name:'doChangeView',function: function(view,hasPrevious,reverse) { return this.ext.doChangeView(view,hasPrevious,reverse) } },
{ name:'getBackButtonText',function: function() { return this.ext.getBackButtonText() } },
{ name:'getTitleText',function: function() { return this.ext.getTitleText() } },
{ name:'measureView',function: function(oldLeft,oldTitle,reverse) { return this.ext.measureView(oldLeft,oldTitle,reverse) } },
{ name:'onViewAdd',function: function(view,item) { return this.ext.onViewAdd(view,item) } },
{ name:'onViewRemove',function: function(view) { return this.ext.onViewRemove(view) } },
{ name:'updateBackButton',function: function(newBackButton,oldBackButton) { return this.ext.updateBackButton(newBackButton,oldBackButton) } },
{ name:'updateHidden',function: function(hidden) { return this.ext.updateHidden(hidden) } },
{ name:'updateView',function: function(newView) { return this.ext.updateView(newView) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_navigation_Bar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_navigation_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_navigation_Bar_Component.METHODS(),
            Ext_navigation_Bar_Component.XTYPE(),
            Ext_navigation_Bar_Component.PROPERTIESOBJECT(),
            Ext_navigation_Bar_Component.EVENTS()
        )
        this.XTYPE = Ext_navigation_Bar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_navigation_Bar_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_navigation_Bar_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_navigation_Bar_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
