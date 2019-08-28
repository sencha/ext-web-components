import EwcBaseComponent from '../ewc-base.component'

export default class Ext_Base_Component extends EwcBaseComponent {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"ewc": ["string"],
"align": ["string"],
"viewport":["boolean"],
"plugins":["Array","Ext.enums.Plugin","Object","Ext.plugin.Abstract"],
"responsiveConfig":["Object"],
"responsiveFormulas":["Object"]
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
{ name:'statics',function: function() { return this.ext.statics() } },
{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },
]}

    static get observedAttributes() {
        var attrs = []
        for (var property in Ext_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        attrs.push('on' + 'ready')
        return attrs
    }

    constructor() {
        super (
            Ext_Base_Component.METHODS(),
            Ext_Base_Component.XTYPE(),
            Ext_Base_Component.PROPERTIESOBJECT(),
            Ext_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Base_Component.EVENTS());
    }
}