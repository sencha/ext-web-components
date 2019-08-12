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

    constructor() {
        super (
            Ext_dataview_listswiper_Stepper_Component.METHODS(),
            Ext_dataview_listswiper_Stepper_Component.XTYPE(),
            Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT(),
            Ext_dataview_listswiper_Stepper_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_listswiper_Stepper_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_listswiper_Stepper_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_listswiper_Stepper_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
