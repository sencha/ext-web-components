import Ext_dataview_listswiper_Item_Component from '../../../Ext/dataview/listswiper/Item';

export default class Ext_dataview_listswiper_Stepper_Component extends Ext_dataview_listswiper_Item_Component {
//events
//configs

static XTYPE() {return 'listswiperstepper'}
static PROPERTIESOBJECT() { return {
"animation":["boolean","object"],
"iconCls":["string"],
"side":["any"],
"step":["any"],
"text":["string"],
"undo":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'buildSteps',function: function() { return this.ext.buildSteps() } },
{ name:'dismiss',function: function(animate) { return this.ext.dismiss(animate) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_listswiper_Stepper_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_dataview_listswiper_Stepper_Component.METHODS()),
            events.concat(Ext_dataview_listswiper_Stepper_Component.EVENTS())



            //events.concat(Ext_dataview_listswiper_Stepper_Component.EVENTS()),
            //propertiesobject.concat(Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_dataview_listswiper_Stepper_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_dataview_listswiper_Stepper_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_dataview_listswiper_Stepper_Component.METHODS())
        )
        //this.XTYPE = Ext_dataview_listswiper_Stepper_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_dataview_listswiper_Stepper_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_dataview_listswiper_Stepper_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
