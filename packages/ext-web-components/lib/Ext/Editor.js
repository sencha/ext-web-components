import Ext_Container_Component from '../Ext/Container';

export default class Ext_Editor_Component extends Ext_Container_Component {
//events
get onbeforecomplete(){return this.getAttribute('onbeforecomplete')};set onbeforecomplete(onbeforecomplete){this.setAttribute('onbeforecomplete',onbeforecomplete)}
get onbeforestartedit(){return this.getAttribute('onbeforestartedit')};set onbeforestartedit(onbeforestartedit){this.setAttribute('onbeforestartedit',onbeforestartedit)}
get oncanceledit(){return this.getAttribute('oncanceledit')};set oncanceledit(oncanceledit){this.setAttribute('oncanceledit',oncanceledit)}
get oncomplete(){return this.getAttribute('oncomplete')};set oncomplete(oncomplete){this.setAttribute('oncomplete',oncomplete)}
get onspecialkey(){return this.getAttribute('onspecialkey')};set onspecialkey(onspecialkey){this.setAttribute('onspecialkey',onspecialkey)}
get onstartedit(){return this.getAttribute('onstartedit')};set onstartedit(onstartedit){this.setAttribute('onstartedit',onstartedit)}
//configs

static XTYPE() {return 'editor'}
static PROPERTIESOBJECT() { return {
"alignment":["string"],
"allowBlur":["boolean"],
"cancelOnClear":["boolean"],
"cancelOnEsc":["boolean"],
"completeOnEnter":["boolean"],
"constrain":["boolean"],
"field":["object"],
"hideEl":["boolean"],
"ignoreNoChange":["boolean"],
"matchFont":["boolean"],
"offset":["number[]"],
"parentEl":["string","htmlelement","Ext.dom.Element"],
"revertInvalid":["boolean"],
"shadow":["boolean","string"],
"swallowKeys":["boolean"],
"updateEl":["boolean"],
"value":["object"],
}}
static EVENTS() { return [
{name:'beforecomplete',parameters:'undefined,value,startValue'},
{name:'beforestartedit',parameters:'undefined,boundEl,value'},
{name:'canceledit',parameters:'undefined,value,startValue'},
{name:'complete',parameters:'undefined,value,startValue'},
{name:'specialkey',parameters:'undefined,field,event'},
{name:'startedit',parameters:'undefined,boundEl,value'},
]}
static METHODS() { return [
{ name:'cancelEdit',function: function(remainVisible) { return this.ext.cancelEdit(remainVisible) } },
{ name:'completeEdit',function: function(remainVisible) { return this.ext.completeEdit(remainVisible) } },
{ name:'getLocation',function: function() { return this.ext.getLocation() } },
{ name:'getValue',function: function() { return this.ext.getValue() } },
{ name:'onEditComplete',function: function(remainVisible,cancelling) { return this.ext.onEditComplete(remainVisible,cancelling) } },
{ name:'onSpecialKey',function: function(field,event) { return this.ext.onSpecialKey(field,event) } },
{ name:'realign',function: function() { return this.ext.realign() } },
{ name:'setValue',function: function(value) { return this.ext.setValue(value) } },
{ name:'startEdit',function: function(el,value,doFocus) { return this.ext.startEdit(el,value,doFocus) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Editor_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Editor_Component.METHODS(),
            Ext_Editor_Component.XTYPE(),
            Ext_Editor_Component.PROPERTIESOBJECT(),
            Ext_Editor_Component.EVENTS()
        )
        this.XTYPE = Ext_Editor_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Editor_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Editor_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Editor_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
