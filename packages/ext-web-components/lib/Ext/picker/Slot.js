import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

export default class Ext_picker_Slot_Component extends Ext_dataview_DataView_Component {
//events
get onslotpick(){return this.getAttribute('onslotpick')};set onslotpick(onslotpick){this.setAttribute('onslotpick',onslotpick)}
//configs

static XTYPE() {return 'pickerslot'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"cls":["string"],
"displayField":["string"],
"flex":["number"],
"itemTpl":["string"],
"name":["string"],
"scrollable":["object"],
"showTitle":["boolean"],
"title":["string"],
"triggerEvent":["'tap'"],
"value":["number"],
"valueField":["string"],
"verticallyCenterItems":["boolean"],
}}
static EVENTS() { return [
{name:'slotpick',parameters:'undefined,value,node'},
]}
static METHODS() { return [
{ name:'applyData',function: function(data) { return this.ext.applyData(data) } },
{ name:'applyTitle',function: function(title) { return this.ext.applyTitle(title) } },
{ name:'getPicker',function: function() { return this.ext.getPicker() } },
{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
{ name:'getValue',function: function(useDom) { return this.ext.getValue(useDom) } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'navigateToItem',function: function(item,animation) { return this.ext.navigateToItem(item,animation) } },
{ name:'onPainted',function: function() { return this.ext.onPainted() } },
{ name:'onResize',function: function() { return this.ext.onResize() } },
{ name:'onScrollEnd',function: function(x,y) { return this.ext.onScrollEnd(x,y) } },
{ name:'setupBar',function: function() { return this.ext.setupBar() } },
{ name:'updateAlign',function: function(newAlign,oldAlign) { return this.ext.updateAlign(newAlign,oldAlign) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_picker_Slot_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_picker_Slot_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_picker_Slot_Component.METHODS(),
            Ext_picker_Slot_Component.XTYPE(),
            Ext_picker_Slot_Component.PROPERTIESOBJECT(),
            Ext_picker_Slot_Component.EVENTS()
        )
        this.XTYPE = Ext_picker_Slot_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_Slot_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_picker_Slot_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_picker_Slot_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
