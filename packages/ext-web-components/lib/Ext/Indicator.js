import Ext_Component_Component from '../Ext/Component';

export default class Ext_Indicator_Component extends Ext_Component_Component {
//events
get onindicatortap(){return this.getAttribute('onindicatortap')};set onindicatortap(onindicatortap){this.setAttribute('onindicatortap',onindicatortap)}
get onnext(){return this.getAttribute('onnext')};set onnext(onnext){this.setAttribute('onnext',onnext)}
get onprevious(){return this.getAttribute('onprevious')};set onprevious(onprevious){this.setAttribute('onprevious',onprevious)}
//configs

static XTYPE() {return 'indicator'}
static PROPERTIESOBJECT() { return {
"activeIndex":["number"],
"count":["number"],
"direction":["string"],
"tapMode":["string"],
}}
static EVENTS() { return [
{name:'indicatortap',parameters:'undefined,index,item'},
{name:'next',parameters:'undefined'},
{name:'previous',parameters:'undefined'},
]}
static METHODS() { return [
{ name:'add',function: function() { return this.ext.add() } },
{ name:'doAdd',function: function() { return this.ext.doAdd() } },
{ name:'doRemove',function: function() { return this.ext.doRemove() } },
{ name:'onTap',function: function(e) { return this.ext.onTap(e) } },
{ name:'onTapDirection',function: function(e) { return this.ext.onTapDirection(e) } },
{ name:'onTapItem',function: function(e) { return this.ext.onTapItem(e) } },
{ name:'remove',function: function() { return this.ext.remove() } },
{ name:'removeAll',function: function() { return this.ext.removeAll() } },
{ name:'sync',function: function(count,activeIndex) { return this.ext.sync(count,activeIndex) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Indicator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Indicator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Indicator_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Indicator_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Indicator_Component.METHODS()),
            events.concat(Ext_Indicator_Component.EVENTS())



            //events.concat(Ext_Indicator_Component.EVENTS()),
            //propertiesobject.concat(Ext_Indicator_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Indicator_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Indicator_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Indicator_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Indicator_Component.METHODS())
        )
        //this.XTYPE = Ext_Indicator_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Indicator_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Indicator_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Indicator_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
