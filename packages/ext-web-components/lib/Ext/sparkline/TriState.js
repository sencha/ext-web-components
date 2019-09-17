import Ext_sparkline_BarBase_Component from '../../Ext/sparkline/BarBase';

export default class Ext_sparkline_TriState_Component extends Ext_sparkline_BarBase_Component {
//events
//configs

static XTYPE() {return 'sparklinetristate'}
static PROPERTIESOBJECT() { return {
"barSpacing":["number"],
"barWidth":["number"],
"colorMap":["object"],
"negBarColor":["string"],
"posBarColor":["string"],
"zeroBarColor":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_TriState_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_TriState_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_sparkline_TriState_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_sparkline_TriState_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_sparkline_TriState_Component.METHODS()),
            events.concat(Ext_sparkline_TriState_Component.EVENTS())



            //events.concat(Ext_sparkline_TriState_Component.EVENTS()),
            //propertiesobject.concat(Ext_sparkline_TriState_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_sparkline_TriState_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_sparkline_TriState_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_sparkline_TriState_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_sparkline_TriState_Component.METHODS())
        )
        //this.XTYPE = Ext_sparkline_TriState_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_TriState_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_sparkline_TriState_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_sparkline_TriState_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
