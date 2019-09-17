import Ext_Widget_Component from '../../../Ext/Widget';

export default class Ext_scroll_indicator_Indicator_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"axis":["'x'","'y'"],
"enabled":["any"],
"scroller":["Ext.scroll.VirtualScroller"],
"value":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_scroll_indicator_Indicator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_scroll_indicator_Indicator_Component.METHODS()),
            events.concat(Ext_scroll_indicator_Indicator_Component.EVENTS())



            //events.concat(Ext_scroll_indicator_Indicator_Component.EVENTS()),
            //propertiesobject.concat(Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_scroll_indicator_Indicator_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_scroll_indicator_Indicator_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_scroll_indicator_Indicator_Component.METHODS())
        )
        //this.XTYPE = Ext_scroll_indicator_Indicator_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_scroll_indicator_Indicator_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_scroll_indicator_Indicator_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_scroll_indicator_Indicator_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
