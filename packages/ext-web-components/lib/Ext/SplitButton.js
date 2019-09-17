import Ext_Button_Component from '../Ext/Button';

export default class Ext_SplitButton_Component extends Ext_Button_Component {
//events
get onarrowclick(){return this.getAttribute('onarrowclick')};set onarrowclick(onarrowclick){this.setAttribute('onarrowclick',onarrowclick)}
//configs

static XTYPE() {return 'splitbutton'}
static PROPERTIESOBJECT() { return {
"arrowHandler":["function"],
}}
static EVENTS() { return [
{name:'arrowclick',parameters:'undefined,e'},
]}
static METHODS() { return [
{ name:'doTap',function: function(me,e) { return this.ext.doTap(me,e) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_SplitButton_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_SplitButton_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_SplitButton_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_SplitButton_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_SplitButton_Component.METHODS()),
            events.concat(Ext_SplitButton_Component.EVENTS())



            //events.concat(Ext_SplitButton_Component.EVENTS()),
            //propertiesobject.concat(Ext_SplitButton_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_SplitButton_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_SplitButton_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_SplitButton_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_SplitButton_Component.METHODS())
        )
        //this.XTYPE = Ext_SplitButton_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_SplitButton_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_SplitButton_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_SplitButton_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
