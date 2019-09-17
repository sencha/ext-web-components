import Ext_Container_Component from '../Ext/Container';

export default class Ext_Toolbar_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'toolbar'}
static PROPERTIESOBJECT() { return {
"defaultButtonUI":["string"],
"defaultType":["string"],
"docked":["string"],
"layout":["object","string"],
"minHeight":["number","string"],
"title":["string","Ext.Title"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyTitle',function: function(title) { return this.ext.applyTitle(title) } },
{ name:'getTitle',function: function() { return this.ext.getTitle() } },
{ name:'hideTitle',function: function() { return this.ext.hideTitle() } },
{ name:'setTitle',function: function(title) { return this.ext.setTitle(title) } },
{ name:'showTitle',function: function() { return this.ext.showTitle() } },
{ name:'updateTitle',function: function(newTitle,oldTitle) { return this.ext.updateTitle(newTitle,oldTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Toolbar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Toolbar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Toolbar_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Toolbar_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Toolbar_Component.METHODS()),
            events.concat(Ext_Toolbar_Component.EVENTS())



            //events.concat(Ext_Toolbar_Component.EVENTS()),
            //propertiesobject.concat(Ext_Toolbar_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Toolbar_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Toolbar_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Toolbar_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Toolbar_Component.METHODS())
        )
        //this.XTYPE = Ext_Toolbar_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Toolbar_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Toolbar_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Toolbar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
