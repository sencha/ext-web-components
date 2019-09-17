import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Pie_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklinepie'}
static PROPERTIESOBJECT() { return {
"borderColor":["string"],
"borderWidth":["number"],
"offset":["number"],
"sliceColors":["string[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Pie_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Pie_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_sparkline_Pie_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_sparkline_Pie_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_sparkline_Pie_Component.METHODS()),
            events.concat(Ext_sparkline_Pie_Component.EVENTS())



            //events.concat(Ext_sparkline_Pie_Component.EVENTS()),
            //propertiesobject.concat(Ext_sparkline_Pie_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_sparkline_Pie_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_sparkline_Pie_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_sparkline_Pie_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_sparkline_Pie_Component.METHODS())
        )
        //this.XTYPE = Ext_sparkline_Pie_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Pie_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_sparkline_Pie_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_sparkline_Pie_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
