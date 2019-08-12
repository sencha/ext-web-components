import Ext_field_Picker_Component from '../../Ext/field/Picker';

export default class Ext_field_Select_Component extends Ext_field_Picker_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onfocus(){return this.getAttribute('onfocus')};set onfocus(onfocus){this.setAttribute('onfocus',onfocus)}
get onselect(){return this.getAttribute('onselect')};set onselect(onselect){this.setAttribute('onselect',onselect)}
//configs

static XTYPE() {return 'selectfield'}
static PROPERTIESOBJECT() { return {
"autoFocus":["boolean"],
"autoFocusLast":["boolean"],
"autoLoadOnValue":["boolean"],
"autoSelect":["boolean","'initial'"],
"chipView":["any"],
"collapseOnSelect":["boolean"],
"delimiter":["string"],
"displayField":["string","number"],
"displayTpl":["string","string[]","Ext.XTemplate"],
"edgePicker":["object"],
"editable":["boolean"],
"floatedPicker":["object"],
"forceSelection":["boolean"],
"hiddenName":["string"],
"itemCls":["string"],
"itemTpl":["string","Ext.XTemplate"],
"multiSelect":["boolean"],
"options":["array"],
"publishes":["string","string[]","object"],
"recordCreator":["function","string"],
"recordCreatorScope":["object"],
"selection":["Ext.data.Model"],
"selectOnTab":["boolean"],
"store":["Ext.data.Store","object","string"],
"twoWayBindable":["string","string[]","object"],
"valueCollection":["object","Ext.util.Collection"],
"valueField":["string","number"],
"valueNotFoundText":["string"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
{name:'focus',parameters:'undefined,e'},
{name:'select',parameters:'undefined,newValue'},
]}
static METHODS() { return [
{ name:'createEnteredRecord',function: function(value) { return this.ext.createEnteredRecord(value) } },
{ name:'createSelectionRecord',function: function(data) { return this.ext.createSelectionRecord(data) } },
{ name:'filterPicked',function: function(record) { return this.ext.filterPicked(record) } },
{ name:'findRecordByDisplay',function: function(value) { return this.ext.findRecordByDisplay(value) } },
{ name:'findRecordByValue',function: function(value) { return this.ext.findRecordByValue(value) } },
{ name:'getRecordDisplayData',function: function(record) { return this.ext.getRecordDisplayData(record) } },
{ name:'maybeCollapse',function: function(event) { return this.ext.maybeCollapse(event) } },
{ name:'onCollectionAdd',function: function(valueCollection,adds) { return this.ext.onCollectionAdd(valueCollection,adds) } },
{ name:'onCollectionEndUpdate',function: function() { return this.ext.onCollectionEndUpdate() } },
{ name:'onCollectionRemove',function: function(valueCollection,chunk) { return this.ext.onCollectionRemove(valueCollection,chunk) } },
{ name:'onStoreDataChanged',function: function() { return this.ext.onStoreDataChanged() } },
{ name:'onStoreLoad',function: function(store,records,success) { return this.ext.onStoreLoad(store,records,success) } },
{ name:'onStoreRecordUpdated',function: function(store,record) { return this.ext.onStoreRecordUpdated(store,record) } },
{ name:'onStoreRefresh',function: function(store) { return this.ext.onStoreRefresh(store) } },
{ name:'reset',function: function() { return this.ext.reset() } },
{ name:'setFieldDisplay',function: function() { return this.ext.setFieldDisplay() } },
{ name:'updatePickerStore',function: function() { return this.ext.updatePickerStore() } },
{ name:'updateSelection',function: function(selection,oldSelection) { return this.ext.updateSelection(selection,oldSelection) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Select_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Select_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Select_Component.METHODS(),
            Ext_field_Select_Component.XTYPE(),
            Ext_field_Select_Component.PROPERTIESOBJECT(),
            Ext_field_Select_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Select_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Select_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Select_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Select_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
