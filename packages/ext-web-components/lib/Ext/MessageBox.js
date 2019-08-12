import Ext_Dialog_Component from '../Ext/Dialog';

export default class Ext_MessageBox_Component extends Ext_Dialog_Component {
//events
//configs

static XTYPE() {return 'messagebox'}
static PROPERTIESOBJECT() { return {
"buttons":["array","object"],
"closeAction":["string"],
"defaultTextHeight":["number"],
"iconCls":["string"],
"layout":["object","string"],
"message":["string"],
"msg":["string"],
"prompt":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'alert',function: function(title,message,fn,scope) { return this.ext.alert(title,message,fn,scope) } },
{ name:'applyIconCls',function: function(config) { return this.ext.applyIconCls(config) } },
{ name:'applyMessage',function: function(config) { return this.ext.applyMessage(config) } },
{ name:'applyPrompt',function: function(prompt) { return this.ext.applyPrompt(prompt) } },
{ name:'applyTitle',function: function(config) { return this.ext.applyTitle(config) } },
{ name:'confirm',function: function(title,message,fn,scope) { return this.ext.confirm(title,message,fn,scope) } },
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
{ name:'onClick',function: function(button) { return this.ext.onClick(button) } },
{ name:'prompt',function: function(title,message,fn,scope,multiLine,value,prompt) { return this.ext.prompt(title,message,fn,scope,multiLine,value,prompt) } },
{ name:'show',function: function(msgBoxOptions,options) { return this.ext.show(msgBoxOptions,options) } },
{ name:'updateIconCls',function: function(newIconCls,oldIconCls) { return this.ext.updateIconCls(newIconCls,oldIconCls) } },
{ name:'updateMessage',function: function(newMessage) { return this.ext.updateMessage(newMessage) } },
{ name:'updatePrompt',function: function(newPrompt,oldPrompt) { return this.ext.updatePrompt(newPrompt,oldPrompt) } },
{ name:'updateTitle',function: function(newTitle) { return this.ext.updateTitle(newTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_MessageBox_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_MessageBox_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_MessageBox_Component.METHODS(),
            Ext_MessageBox_Component.XTYPE(),
            Ext_MessageBox_Component.PROPERTIESOBJECT(),
            Ext_MessageBox_Component.EVENTS()
        )
        this.XTYPE = Ext_MessageBox_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_MessageBox_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_MessageBox_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_MessageBox_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
