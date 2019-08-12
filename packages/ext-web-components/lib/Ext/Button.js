import Ext_Component_Component from '../Ext/Component';

export default class Ext_Button_Component extends Ext_Component_Component {
//events
get onbeforepressedchange(){return this.getAttribute('onbeforepressedchange')};set onbeforepressedchange(onbeforepressedchange){this.setAttribute('onbeforepressedchange',onbeforepressedchange)}
get onpressedchange(){return this.getAttribute('onpressedchange')};set onpressedchange(onpressedchange){this.setAttribute('onpressedchange',onpressedchange)}
get onrelease(){return this.getAttribute('onrelease')};set onrelease(onrelease){this.setAttribute('onrelease',onrelease)}
get ontap(){return this.getAttribute('ontap')};set ontap(ontap){this.setAttribute('ontap',ontap)}
//configs

static XTYPE() {return 'button'}
static PROPERTIESOBJECT() { return {
"allowDepress":["boolean"],
"arrow":["boolean"],
"arrowAlign":["'right'","'bottom'"],
"autoEvent":["string"],
"badgeText":["string"],
"buttonType":["string"],
"destroyMenu":["boolean"],
"enableToggle":["boolean"],
"handler":["function"],
"html":["string"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"menu":["Ext.menu.Menu","string","object"],
"menuAlign":["string"],
"pressed":["boolean"],
"pressedDelay":["number","boolean"],
"publishes":["string","string[]","object"],
"scope":["object"],
"stretchMenu":["boolean"],
"text":["string"],
"textAlign":["'left'","'right'","'center'"],
"toggleHandler":["function"],
"ui":["string"],
"value":["string","number"],
}}
static EVENTS() { return [
{name:'beforepressedchange',parameters:'sender,value,oldValue,undefined'},
{name:'pressedchange',parameters:'sender,value,oldValue'},
{name:'release',parameters:'undefined,e'},
{name:'tap',parameters:'undefined,e'},
]}
static METHODS() { return [
{ name:'doRelease',function: function(me,e) { return this.ext.doRelease(me,e) } },
{ name:'doTap',function: function(me,e) { return this.ext.doTap(me,e) } },
{ name:'findEventTarget',function: function() { return this.ext.findEventTarget() } },
{ name:'getButtonTemplate',function: function() { return this.ext.getButtonTemplate() } },
{ name:'isPressed',function: function() { return this.ext.isPressed() } },
{ name:'onPress',function: function(e) { return this.ext.onPress(e) } },
{ name:'onRelease',function: function(e) { return this.ext.onRelease(e) } },
{ name:'onTap',function: function(e) { return this.ext.onTap(e) } },
{ name:'shouldRipple',function: function() { return this.ext.shouldRipple() } },
{ name:'toggle',function: function() { return this.ext.toggle() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Button_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Button_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Button_Component.METHODS(),
            Ext_Button_Component.XTYPE(),
            Ext_Button_Component.PROPERTIESOBJECT(),
            Ext_Button_Component.EVENTS()
        )
        this.XTYPE = Ext_Button_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Button_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Button_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Button_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
