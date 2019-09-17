import Ext_dataview_ListItem_Component from '../../../Ext/dataview/ListItem';

export default class Ext_grid_rowedit_Editor_Component extends Ext_dataview_ListItem_Component {
//events
//configs

static XTYPE() {return 'roweditor'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'cancel',function: function() { return this.ext.cancel() } },
{ name:'getChanges',function: function() { return this.ext.getChanges() } },
{ name:'getEditItem',function: function(column) { return this.ext.getEditItem(column) } },
{ name:'getEditorValues',function: function(all) { return this.ext.getEditorValues(all) } },
{ name:'isDirty',function: function() { return this.ext.isDirty() } },
{ name:'isValid',function: function() { return this.ext.isValid() } },
{ name:'resetChanges',function: function() { return this.ext.resetChanges() } },
{ name:'revertChanges',function: function() { return this.ext.revertChanges() } },
{ name:'saveAndClose',function: function() { return this.ext.saveAndClose() } },
{ name:'setFieldValues',function: function(values) { return this.ext.setFieldValues(values) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_rowedit_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_rowedit_Editor_Component.METHODS()),
            events.concat(Ext_grid_rowedit_Editor_Component.EVENTS())



            //events.concat(Ext_grid_rowedit_Editor_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_rowedit_Editor_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_rowedit_Editor_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_rowedit_Editor_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_rowedit_Editor_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_rowedit_Editor_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_rowedit_Editor_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
