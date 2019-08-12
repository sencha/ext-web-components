import Ext_Container_Component from '../../Ext/Container';

export default class Ext_dataview_DataItem_Component extends Ext_Container_Component {
//events
get onupdatedata(){return this.getAttribute('onupdatedata')};set onupdatedata(onupdatedata){this.setAttribute('onupdatedata',onupdatedata)}
//configs

static XTYPE() {return 'dataitem'}
static PROPERTIESOBJECT() { return {
"dataMap":["object"],
"itemCls":["string"],
}}
static EVENTS() { return [
{name:'updatedata',parameters:'dataItem,newData'},
]}
static METHODS() { return [
{ name:'updateRecord',function: function(record) { return this.ext.updateRecord(record) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_DataItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_DataItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_DataItem_Component.METHODS(),
            Ext_dataview_DataItem_Component.XTYPE(),
            Ext_dataview_DataItem_Component.PROPERTIESOBJECT(),
            Ext_dataview_DataItem_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_DataItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_DataItem_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_DataItem_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_DataItem_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
